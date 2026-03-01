"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  dealership: string;
  phone: string;
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function DemoRequestButton() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState<FormState>({ name: "", email: "", dealership: "", phone: "" });

  const canSubmit = useMemo(() => {
    if (!form.name.trim()) return false;
    if (!validateEmail(form.email)) return false;
    if (!form.dealership.trim()) return false;
    if (!form.phone.trim()) return false;
    return true;
  }, [form]);

  async function onSubmit() {
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Request failed");
      }

      setStatus("success");
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong");
    }
  }

  function resetAndClose() {
    setOpen(false);
    setStatus("idle");
    setError("");
    setForm({ name: "", email: "", dealership: "", phone: "" });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
      >
        Request a demo
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] flex overflow-y-auto p-4 items-start justify-center sm:items-center">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={resetAndClose}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-lg rounded-3xl bg-[#0B1026] p-6 text-white ring-1 ring-white/15 max-h-[calc(100svh-2rem)] overflow-auto">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold">Request a demo</div>
                  <div className="mt-1 text-sm text-zinc-300">
                    Send us your info and we’ll follow up.
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="rounded-full px-3 py-1 text-sm text-zinc-300 ring-1 ring-white/15 hover:bg-white/5"
                >
                  Close
                </button>
              </div>

              {status === "success" ? (
                <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="font-semibold">Thanks — we got it.</div>
                  <div className="mt-1 text-sm text-zinc-300">
                    We’ll reach out shortly.
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={resetAndClose}
                      className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black hover:bg-zinc-200"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  className="mt-6 grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (status !== "submitting" && canSubmit) void onSubmit();
                  }}
                >
                  <label className="grid gap-1">
                    <span className="text-xs font-semibold text-zinc-200">Name</span>
                    <input
                      className="h-11 rounded-2xl bg-white/5 px-4 text-sm text-white ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </label>

                  <label className="grid gap-1">
                    <span className="text-xs font-semibold text-zinc-200">Email</span>
                    <input
                      className="h-11 rounded-2xl bg-white/5 px-4 text-sm text-white ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="name@dealership.com"
                      autoComplete="email"
                      inputMode="email"
                    />
                  </label>

                  <label className="grid gap-1">
                    <span className="text-xs font-semibold text-zinc-200">Dealership / Group</span>
                    <input
                      className="h-11 rounded-2xl bg-white/5 px-4 text-sm text-white ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                      value={form.dealership}
                      onChange={(e) => setForm((f) => ({ ...f, dealership: e.target.value }))}
                      placeholder="Example Auto Group"
                      autoComplete="organization"
                    />
                  </label>

                  <label className="grid gap-1">
                    <span className="text-xs font-semibold text-zinc-200">Phone</span>
                    <input
                      className="h-11 rounded-2xl bg-white/5 px-4 text-sm text-white ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="(555) 555-5555"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </label>

                  {status === "error" ? (
                    <div className="rounded-2xl bg-red-500/10 p-3 text-sm text-red-200 ring-1 ring-red-500/25">
                      {error || "Something went wrong."}
                    </div>
                  ) : null}

                  <div className="mt-2 flex items-center justify-between gap-3">
                    <div className="text-xs text-zinc-400">
                      This sends an email to the MergeData team.
                    </div>
                    <button
                      type="submit"
                      disabled={!canSubmit || status === "submitting"}
                      className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-60 hover:bg-zinc-200"
                    >
                      {status === "submitting" ? "Sending…" : "Send"}
                    </button>
                  </div>
                </form>
              )}
          </div>
        </div>
      ) : null}
    </>
  );
}
