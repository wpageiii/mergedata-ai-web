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
                <Pill>Dealership Intelligence Accelerated.</Pill>
                <Pill>One operational truth</Pill>
                <Pill>Kai coordinates the work</Pill>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Turn messy dealership data into
                <span className="block text-zinc-200">daily priorities.</span>
              </h1>
              <p className="mt-6 text-base leading-7 text-zinc-300 md:text-lg">
                MergeData replaces fragmented reporting with one operational truth screen—and Kai turns it
                into tasks, owner assignments, and executive summaries.
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

            {/* Kai motion graphic placeholder */}
            <div className="w-full max-w-xl">
              <div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-6 ring-1 ring-white/15">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">Kai orchestration (motion)</div>
                  <span className="rounded-full bg-amber-500/15 px-2 py-1 text-xs font-medium text-amber-200 ring-1 ring-amber-500/20">
                    Placeholder
                  </span>
                </div>

                <div className="mt-4 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                  <div className="text-xs font-semibold text-white">What goes here</div>
                  <p className="mt-2 text-xs leading-5 text-zinc-300">
                    A looping motion graphic: integrations stream in → Kai wakes → organizes tasks & mentions
                    → operators wake and execute → outputs on the right → brief rest → loop.
                  </p>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Integrations (data in)",
                    "Kai (center)",
                    "Tasks / assignments",
                    "Conversations / mentions",
                    "Operators (team)",
                    "Reports / exec summary",
                  ].map((x) => (
                    <div
                      key={x}
                      className="rounded-2xl bg-black/40 px-4 py-3 text-xs text-zinc-200 ring-1 ring-white/10"
                    >
                      {x}
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-xs text-zinc-400">
                  Preferred implementation: Lottie JSON (so we can control sizing + loop on web).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom tag / value */}
      <section className="border-y border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="text-sm leading-6 text-zinc-300">
            MergeData replaces fragmented dealership reporting with one operational truth screen, and Kai
            turns it into daily priorities, tasks, and executive summaries.
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-black">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              How it works
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              MergeData is built to replace fragmented reporting with an operational truth screen—then turn
              that truth into daily action.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {/* Step 1 */}
            <div className="grid gap-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-xs font-semibold text-zinc-300">01</div>
                <div className="mt-2 text-xl font-semibold text-white">
                  Too many dashboards, not enough time
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  We know it. Our previous company was called <span className="text-white">Dashboard</span>—one might say we had
                  a part in creating this mess.
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Dealers do not need another dashboard tool.
                </p>
              </div>
              <div className="rounded-2xl bg-black/30 p-6 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-white">Graphic placeholder</div>
                <p className="mt-2 text-xs leading-5 text-zinc-300">
                  Dealer in an office staring at ~10 screens/dashboards.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid gap-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-xs font-semibold text-zinc-300">02</div>
                <div className="mt-2 text-xl font-semibold text-white">
                  Merge your tech stack into a single unified platform
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  MergeData is the dealership operating intelligence platform that unifies DMS, CRM, and other vendor
                  systems into one trusted decision environment.
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  MergeData is not “another reporting tool.” It is the operational system of record for dealership truth.
                </p>
              </div>
              <div className="rounded-2xl bg-black/30 p-6 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-white">Graphic placeholder</div>
                <p className="mt-2 text-xs leading-5 text-zinc-300">
                  All vendor data flows in → transformed → stored as a single repository/canonical model.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid gap-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-xs font-semibold text-zinc-300">03</div>
                <div className="mt-2 text-xl font-semibold text-white">
                  Kai is an embedded AI performance operator inside MergeData
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Kai is not a generic chatbot.
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Kai moves the dealership from “Here’s a report.” to “Here’s what changed, why it changed, and what actions
                  to take today.”
                </p>

                <div className="mt-6 rounded-2xl bg-black/30 p-5 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-white">The bulletproof 5</div>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />Detect — monitoring + anomaly/threshold detection</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />Explain — root-cause narratives tied to drillable data</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />Prioritize — role-based daily priorities (what matters today)</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />Recommend — next best actions / corrective steps</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />Summarize — executive summaries (daily/weekly), consistent format</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl bg-black/30 p-6 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-white">Image placeholder</div>
                <p className="mt-2 text-xs leading-5 text-zinc-300">
                  Derived from main screen: Kai humble extension / embedded operator panel.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid gap-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-2 md:items-start">
              <div>
                <div className="text-xs font-semibold text-zinc-300">04</div>
                <div className="mt-2 text-xl font-semibold text-white">Unleash the bots</div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  After MergeData + Kai are proven at scale, we layer purpose-built expert agents that operate specific
                  dealership workflows.
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  These are not chatbots; they are department operators with measurable KPIs.
                </p>
              </div>
              <div className="rounded-2xl bg-black/30 p-6 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-white">Roadmap examples</div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />MD Titling Agent — reduces funding friction + title backlog + compliance risk</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />MD Parts Ordering Agent — optimizes parts ordering workflow (including DMS writeback where allowed)</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />MD Inventory Acquisition Agent — improves buy discipline, turn, and margin protection</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />MD Recon Expert Agent — reduces recon days, cost variance, and frontline readiness delays</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />MD Payment Plan Agent — optimizes sales spiffs/incentives for behavior + margin efficiency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="border-y border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Integrations
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Bring your existing stack. MergeData unifies signals into one operational view.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {[
              "DMS",
              "CRM",
              "Call tracking",
              "Website",
              "Ads",
              "Inventory",
              "Service",
              "Chat",
              "Reviews",
              "Payments",
              "Spreadsheets",
              "Custom API",
            ].map((x) => (
              <div
                key={x}
                className="flex items-center justify-center rounded-2xl bg-white/5 px-4 py-6 text-xs font-medium text-zinc-200 ring-1 ring-white/10"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-black">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                About us
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                MergeData helps dealership teams stop arguing about numbers and start running the business.
                We unify data, surface what matters, and turn signals into action.
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">What you should feel</div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                <li>• One truth screen (not 12 dashboards)</li>
                <li>• Clear daily priorities</li>
                <li>• Owners assigned automatically</li>
                <li>• Exec summaries on demand</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-black">
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
