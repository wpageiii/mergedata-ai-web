"use client";

import { useMemo, useState } from "react";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });

  // Contact form now submits to our own Next.js API route (/api/contact)
  // which delivers via Mailgun using server-side env vars.

  const [hcaptchaToken, setHcaptchaToken] = useState<string>("");
  const hcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

  const canSubmit = useMemo(() => {
    // If hCaptcha key is configured, require token.
    if (hcaptchaSiteKey) return Boolean(hcaptchaToken);
    return true;
  }, [hcaptchaSiteKey, hcaptchaToken]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setState({ status: "submitting" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: if filled, silently succeed (bots).
    const botcheck = String(formData.get("botcheck") || "");
    if (botcheck.trim().length > 0) {
      setState({ status: "success", message: "Thanks — we got it." });
      form.reset();
      return;
    }

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || ""),
      hcaptchaToken: hcaptchaSiteKey ? hcaptchaToken : "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Unable to submit form.");
      }

      setState({ status: "success", message: "Thanks — we’ll reach out shortly." });
      form.reset();
      setHcaptchaToken("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setState({ status: "error", message });
    }
  }

  return (
    <div className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
      <div className="text-sm font-semibold text-white">Quick intake</div>
      <p className="mt-2 text-sm text-zinc-300">
        Send us a few details and we’ll follow up.
      </p>

      {/* Form is always enabled; delivery is configured via server-side Mailgun env vars. */}

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        {/* Email subject (Web3Forms uses this to set the email subject) */}
        <input type="hidden" name="subject" value="MergeData.ai — Demo / Contact Request" />

        {/* Honeypot (should remain empty) */}
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs text-zinc-300">Name</span>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="text-xs text-zinc-300">Email</span>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="you@company.com"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-xs text-zinc-300">Company (optional)</span>
          <input
            name="company"
            className="mt-1 w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
            placeholder="Dealer group / company"
          />
        </label>

        <label className="block">
          <span className="text-xs text-zinc-300">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 w-full resize-none rounded-xl bg-black/40 px-4 py-3 text-sm text-white ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
            placeholder="What are you trying to measure, what systems do you have, and where should the data land?"
          />
        </label>

        {/* hCaptcha: optional; only loads if a site key is configured */}
        {hcaptchaSiteKey ? (
          <div className="pt-2">
            <script src="https://js.hcaptcha.com/1/api.js" async defer />
            <div
              className="h-captcha"
              data-sitekey={hcaptchaSiteKey}
              data-theme="dark"
              data-callback="hcaptchaCallback"
            />
            <CaptchaBridge onToken={setHcaptchaToken} />
          </div>
        ) : null}

        <button
          type="submit"
          disabled={!canSubmit || state.status === "submitting"}
          className="inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.status === "submitting" ? "Sending…" : "Send message"}
        </button>

        {state.status === "success" ? (
          <div className="text-sm text-emerald-200">{state.message}</div>
        ) : null}
        {state.status === "error" ? (
          <div className="text-sm text-red-200">{state.message}</div>
        ) : null}

        <div className="text-xs text-zinc-400">
          Prefer email? <a className="underline hover:text-white" href="mailto:hello@mergedata.ai">hello@mergedata.ai</a>
        </div>
      </form>
    </div>
  );
}

function CaptchaBridge({ onToken }: { onToken: (t: string) => void }) {
  // hCaptcha uses a global callback name; bridge it into React.
  useMemo(() => {
    const g = globalThis as unknown as { hcaptchaCallback?: (token: string) => void };
    // eslint-disable-next-line react-hooks/immutability
    g.hcaptchaCallback = (token: string) => onToken(token);
    return undefined;
  }, [onToken]);
  return null;
}
