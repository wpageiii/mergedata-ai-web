import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Security",
};

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
      <span className="leading-6 text-zinc-200">{children}</span>
    </li>
  );
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070A1A] via-black to-black text-white">
      <SiteNav />

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Security & privacy</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Built to earn trust.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-300 md:text-base">
            We take dealer data seriously. While we are not SOC 2 certified today, we operate with strong security
            standards and are happy to walk through controls, architecture, and customer requirements during
            evaluation.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-black/30 p-6 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">Core principles</div>
              <ul className="mt-4 space-y-2 text-sm">
                <Bullet>Least-privilege access and role-based permissions.</Bullet>
                <Bullet>Encrypt data in transit; use modern, hardened infrastructure patterns.</Bullet>
                <Bullet>Limit access to authorized personnel; keep an audit trail for operational visibility.</Bullet>
                <Bullet>Data minimization: collect what we need, not what we can.</Bullet>
                <Bullet>Secure-by-default integrations and credential handling.</Bullet>
                <Bullet>Clear customer communication when security requirements come up.</Bullet>
              </ul>
            </div>

            <div className="rounded-3xl bg-black/30 p-6 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">What we can support</div>
              <ul className="mt-4 space-y-2 text-sm">
                <Bullet>Security questionnaires and IT reviews during procurement.</Bullet>
                <Bullet>Scoped access (separate environments, least-privilege tokens, connector-by-connector enablement).</Bullet>
                <Bullet>Data retention expectations and deletion requests by customer policy.</Bullet>
                <Bullet>Restricted sharing: your data is used to operate your account—never to train public models.</Bullet>
                <Bullet>Incident response coordination if an event ever occurs.</Bullet>
                <Bullet>Documentation for integration pathways and data flows.</Bullet>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-white/5 p-6 ring-1 ring-emerald-400/20">
            <div className="text-sm font-semibold text-white">Questions?</div>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              If security is on the line for your evaluation, we’ll happily jump on a call with your IT team and
              walk through our approach.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-400 px-5 text-sm font-semibold text-black hover:bg-emerald-300"
              >
                Contact us
              </Link>
              <a
                href="mailto:hello@mergedata.ai?subject=MergeData%20Security%20Questions"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white/5 px-5 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10"
              >
                Email security questions
              </a>
            </div>
            <div className="mt-4 text-xs text-zinc-400">
              Note: We’ll never claim certifications we don’t have. We’ll share what we do have.
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
