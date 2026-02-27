import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-200 ring-1 ring-white/15">
      {children}
    </span>
  );
}

function Feature({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
      <div className="text-base font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-6 text-zinc-300">{desc}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute top-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 md:pb-24 md:pt-20">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-2">
                <Pill>New: MergeData.ai update</Pill>
                <Pill>Warehouse-ready tables</Pill>
                <Pill>Zero glue code</Pill>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Your data pipeline,
                <span className="block text-zinc-200">made boring again.</span>
              </h1>
              <p className="mt-6 text-base leading-7 text-zinc-300 md:text-lg">
                MergeData.ai connects your sources, normalizes messy schemas, and delivers clean,
                documented tables to your warehouse—so analysts can ship insights without waiting on
                engineering.
              </p>

              <div id="demo" className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black hover:bg-zinc-200"
                >
                  Request a demo
                </Link>
                <Link
                  href="#features"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white/5 px-5 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10"
                >
                  See features
                </Link>
              </div>

              <div className="mt-6 text-xs text-zinc-400">
                Works with your existing stack. No rip-and-replace.
              </div>
            </div>

            {/* Right card */}
            <div className="w-full max-w-xl">
              <div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-6 ring-1 ring-white/15">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">Pipeline overview</div>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-500/20">
                    Live
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { k: "Sources", v: "HubSpot, Stripe, Salesforce, Postgres" },
                    { k: "Transforms", v: "Schema normalization + dedupe + joins" },
                    { k: "Destination", v: "Snowflake / BigQuery / Redshift" },
                    { k: "Refresh", v: "5–15 min incremental" },
                    { k: "Quality", v: "Freshness + volume + null checks" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-start justify-between gap-6 rounded-2xl bg-black/30 px-4 py-3 ring-1 ring-white/10"
                    >
                      <div className="text-xs font-medium text-zinc-300">{row.k}</div>
                      <div className="text-xs text-zinc-200 text-right">{row.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-black/40 p-4 ring-1 ring-white/10">
                  <div className="text-xs font-semibold text-white">What analysts get</div>
                  <p className="mt-2 text-xs leading-5 text-zinc-300">
                    Clean tables with stable naming, documented columns, and consistent primary keys—ready
                    for Looker, Mode, or your semantic layer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-zinc-300">
              Built for teams that need reliable analytics, not another brittle integration.
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-zinc-400 sm:grid-cols-4">
              {[
                "Revenue ops",
                "Product analytics",
                "Finance",
                "Data teams",
              ].map((x) => (
                <div key={x} className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 text-center">
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-black">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Everything you need to trust the numbers.
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Merge sources, enforce consistent definitions, and keep your dashboards accurate as systems
              change.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Feature
              title="Unified schema"
              desc="Normalize objects across systems (accounts, deals, subscriptions, invoices) so downstream models stay stable."
            />
            <Feature
              title="Incremental syncs"
              desc="Fast refresh cycles with safe backfills. Tune freshness by source—without blowing up your warehouse bill."
            />
            <Feature
              title="Quality checks"
              desc="Freshness, row counts, nulls, and key uniqueness checks so you catch issues before execs do."
            />
            <Feature
              title="Lineage + docs"
              desc="Know where every field comes from. Ship a dataset that analysts can actually understand."
            />
            <Feature
              title="Role-based access"
              desc="Keep sensitive fields controlled while still enabling broad self-serve analytics."
            />
            <Feature
              title="Change management"
              desc="Detect schema drift and upstream changes. Avoid the ‘mystery dashboard broke’ fire drills."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-white/10 bg-gradient-to-b from-black to-black">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                From raw sources to warehouse tables.
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                You bring the connections. We handle the normalization, keys, and reliability.
              </p>
            </div>
            <div className="space-y-4">
              {[ 
                {
                  n: "01",
                  t: "Connect",
                  d: "Link your CRM, billing, product DB, and spreadsheets in minutes.",
                },
                {
                  n: "02",
                  t: "Model",
                  d: "Apply consistent definitions (MRR, ARR, active customer) and map entities across systems.",
                },
                {
                  n: "03",
                  t: "Ship",
                  d: "Deliver versioned, documented tables to Snowflake/BigQuery/Redshift.",
                },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white/10 px-2 py-1 text-xs font-semibold text-zinc-200 ring-1 ring-white/15">
                      {s.n}
                    </div>
                    <div className="text-sm font-semibold text-white">{s.t}</div>
                  </div>
                  <div className="mt-2 text-sm leading-6 text-zinc-300">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="bg-black">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Enterprise-grade security, by default.
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Treat customer data like it matters—because it does.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  Least-privilege connections and scoped credentials.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  Audit-friendly logs for syncs and transformations.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  Field-level access controls for sensitive data.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">Security checklist</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "SSO-ready",
                  "RBAC",
                  "Encrypted secrets",
                  "IP allowlists",
                  "Dedicated envs",
                  "Compliance support",
                ].map((x) => (
                  <div key={x} className="rounded-2xl bg-black/30 px-4 py-3 text-xs text-zinc-200 ring-1 ring-white/10">
                    {x}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-zinc-400">
                (We’ll tailor controls based on your deployment + data sensitivity.)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl bg-gradient-to-r from-white/10 to-white/5 p-8 ring-1 ring-white/15 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Want the updated MergeData.ai experience?
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Tell us your sources + destination. We’ll show you a live walkthrough and a suggested
                canonical model.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black hover:bg-zinc-200"
                >
                  Request a demo
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white/5 px-5 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
