import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

type Payload = {
  name?: string;
  email?: string;
  dealership?: string;
  phone?: string;
};

function badRequest(message: string) {
  return new NextResponse(message, { status: 400 });
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
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
  const dealership = String(body?.dealership || "").trim();
  const phone = String(body?.phone || "").trim();

  if (!name) return badRequest("Name is required");
  if (!email || !validateEmail(email)) return badRequest("Valid email is required");
  if (!dealership) return badRequest("Dealership/Group is required");
  if (!phone) return badRequest("Phone is required");

  // NOTE: Email delivery intentionally disabled for now.
  // We still validate + capture the lead so the UX is functional.
  // When ready, wire SMTP (or a provider like Postmark/Resend) and send to:
  // - william.page@mergedata.io
  // - (later) josh.blick@mergedata.io
  console.log("[demo-request] lead captured (email delivery disabled)", {
    name,
    email,
    dealership,
    phone,
    capturedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true, delivered: false });
}
