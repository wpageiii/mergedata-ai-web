import { NextResponse } from "next/server";
import { contactFormRateLimit } from "@/lib/ratelimit";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  hcaptchaToken?: string;
};

function badRequest(message: string) {
  return new NextResponse(message, { status: 400 });
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

async function sendViaMailgun(params: {
  to: string;
  from: string;
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;

  if (!apiKey) throw new Error("Missing MAILGUN_API_KEY");
  if (!domain) throw new Error("Missing MAILGUN_DOMAIN");

  const body = new URLSearchParams();
  body.set("to", params.to);
  body.set("from", params.from);
  body.set("subject", params.subject);
  body.set("text", params.text);
  if (params.replyTo) body.set("h:Reply-To", params.replyTo);

  const res = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Mailgun error (${res.status}): ${text}`);
  }

  return text;
}

export async function POST(req: Request) {
  // Basic rate limiting (server-side) to prevent spam.
  // Note: x-forwarded-for may contain multiple IPs; take the first.
  const forwardedFor = req.headers.get("x-forwarded-for") || "";
  const ip = (forwardedFor.split(",")[0] || "").trim() || "unknown";

  try {
    const rl = await contactFormRateLimit.limit(ip);
    if (!rl.success) {
      const res = new NextResponse("Too Many Requests", { status: 429 });
      // Upstash provides reset time (ms). Convert to seconds.
      const retryAfter = Math.max(1, Math.ceil((rl.reset - Date.now()) / 1000));
      res.headers.set("Retry-After", String(retryAfter));
      return res;
    }
  } catch (err) {
    // If rate limiting is misconfigured, do not hard-fail the contact form.
    // We still log so we can fix env vars.
    console.error("[contact] rate limit error", err);
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return badRequest("Invalid JSON");
  }

  const name = String(body?.name || "").trim();
  const email = String(body?.email || "").trim();
  const company = String(body?.company || "").trim();
  const message = String(body?.message || "").trim();

  if (!name) return badRequest("Name is required");
  if (!email || !validateEmail(email)) return badRequest("Valid email is required");
  if (!message) return badRequest("Message is required");

  const to = process.env.MAIL_TO;
  const from = process.env.MAIL_FROM;

  if (!to) return new NextResponse("Missing MAIL_TO", { status: 500 });
  if (!from) return new NextResponse("Missing MAIL_FROM", { status: 500 });

  const subject = "MergeData.ai — Contact Us submission";

  const capturedAtUtc = new Date();
  const capturedAtUtcIso = capturedAtUtc.toISOString();
  const capturedAtCst = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(capturedAtUtc);

  const text = [
    "New inbound message from the MergeData.ai website contact form.",
    "",
    "Source:",
    "- Page: https://mergedata.ai/contact",
    "",
    "Contact:",
    `- Name: ${name}`,
    `- Email: ${email}`,
    `- Company: ${company || "(not provided)"}`,
    "",
    "Message:",
    message,
    "",
    "Metadata:",
    `- Captured At (UTC): ${capturedAtUtcIso}`,
    `- Captured At (CST): ${capturedAtCst}`,
  ].join("\n");

  try {
    await sendViaMailgun({
      to,
      from,
      subject,
      text,
      replyTo: email,
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("[contact] failed to deliver", msg);
    return new NextResponse("Unable to deliver message", { status: 502 });
  }
}
