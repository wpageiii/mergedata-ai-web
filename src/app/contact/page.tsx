import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { DemoRequestButton } from "@/components/DemoRequestButton";

export const metadata: Metadata = {
  title: "Request a demo",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Request a demo</h1>
            <p className="mt-4 text-sm leading-6 text-zinc-300 md:text-base">
              Tell us what you’re trying to measure, what systems you have, and where you want the data to
              land. We’ll respond with next steps.
            </p>

            <div className="mt-8 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">Email</div>
              <a
                href="mailto:hello@mergedata.ai"
                className="mt-2 block text-sm text-zinc-200 hover:text-white"
              >
                hello@mergedata.ai
              </a>
              <div className="mt-6 text-xs text-zinc-400">
                (We can wire this page up to a form handler, HubSpot, or your CRM when you’re ready.)
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <DemoRequestButton autoOpen className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-400 px-5 text-sm font-semibold text-black hover:bg-emerald-300">
              Request a demo
            </DemoRequestButton>
            <div className="text-sm text-zinc-300">
              We’re consolidating demo requests into a single in-page form.
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white/5 px-5 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
