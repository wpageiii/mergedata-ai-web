import { NextResponse } from "next/server";

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

  const capturedAt = new Date().toISOString();

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
    `- Captured At (UTC): ${capturedAt}`,
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
