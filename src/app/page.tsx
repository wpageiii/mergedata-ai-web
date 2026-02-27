import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { LogoCarousel } from "@/components/LogoCarousel";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-200 ring-1 ring-white/15">
      {children}
    </span>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
      <div className="text-base font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-6 text-zinc-300">{desc}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050714]">
      <SiteNav />

      {/* Hero (revamp: reuse mergedata.io look) */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute top-20 right-[-160px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute bottom-[-240px] left-[-160px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-3 pb-16 pt-10 sm:px-4 md:px-6 md:pb-24 md:pt-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill>Dealership Intelligence Accelerated.</Pill>
              </div>

              <h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
                One operational truth screen.
                <span className="block text-zinc-200">Daily priorities powered by Kai.</span>
              </h1>
              <p className="mt-6 text-base leading-7 text-zinc-300 md:text-lg">
                MergeData replaces fragmented dealership reporting with one operating intelligence platform—and Kai
                turns it into tasks, owner assignments, and executive summaries.
              </p>

              <div id="demo" className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-indigo-500 px-5 text-sm font-semibold text-white hover:bg-indigo-400"
                >
                  Request a demo
                </Link>
                <Link
                  href="#how"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white/5 px-5 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10"
                >
                  How it works
                </Link>
              </div>

              <div className="mt-6 inline-flex rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10">
                Not another reporting tool — the operational system of record for dealership truth.
              </div>
            </div>

            {/* Visual: reuse legacy assets */}
            <div className="relative">
              <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">Kai (preview)</div>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-500/20">
                    Looping
                  </span>
                </div>
                <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <Image
                    src="/legacy/login-ai-kai.gif"
                    alt="Kai preview"
                    width={960}
                    height={600}
                    className="h-auto w-full"
                    unoptimized
                  />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-zinc-300">
                  {["Detect", "Explain", "Prioritize", "Recommend", "Summarize", "Route work"].map((x) => (
                    <div key={x} className="rounded-full bg-black/30 px-3 py-2 text-center ring-1 ring-white/10">
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works (revamp: 01/02/03 cards style) */}
      <section id="how" className="bg-[#050714]">
        <div className="mx-auto max-w-7xl px-3 py-16 sm:px-4 md:px-6 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">How it works</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Replace dashboards with an operating truth screen.
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              MergeData is built to unify your tech stack, prove the numbers, and turn reporting into action.
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            {/* 01 */}
            <div className="grid gap-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-sm font-semibold text-zinc-300">01.</div>
                <div className="mt-2 text-2xl font-semibold text-white">Too many dashboards, not enough time</div>
                <p className="mt-4 text-sm leading-6 text-zinc-300">
                  We know it. Our previous company was called <span className="text-white">Dashboard</span>—one might say we had a part in
                  creating this mess.
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">Dealers do not need another dashboard tool.</p>
              </div>
              <div className="rounded-3xl bg-black/30 p-4 ring-1 ring-white/10">
                <div className="text-xs font-semibold text-white">Graphic placeholder</div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-12 rounded-2xl bg-white/5 ring-1 ring-white/10" />
                  ))}
                </div>
                <p className="mt-3 text-xs text-zinc-400">Dealer in an office staring at ~10 screens/dashboards.</p>
              </div>
            </div>

            {/* 02 */}
            <div className="grid gap-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-sm font-semibold text-zinc-300">02.</div>
                <div className="mt-2 text-2xl font-semibold text-white">Merge your tech stack into a single unified platform</div>
                <p className="mt-4 text-sm leading-6 text-zinc-300">
                  MergeData is the dealership operating intelligence platform that unifies DMS, CRM, and other vendor systems into
                  one trusted decision environment.
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  MergeData is not “another reporting tool.” It is the operational system of record for dealership truth.
                </p>
              </div>
              <div className="overflow-hidden rounded-3xl bg-black/30 ring-1 ring-white/10">
                <Image
                  src="/legacy/home-md.png"
                  alt="MergeData platform preview"
                  width={1200}
                  height={760}
                  className="h-auto w-full"
                />
              </div>
            </div>

            {/* 03 */}
            <div className="grid gap-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-sm font-semibold text-zinc-300">03.</div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  Kai is an embedded AI performance operator inside MergeData.
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-300">Kai is not a generic chatbot.</p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Kai moves the dealership from “Here’s a report.” to “Here’s what changed, why it changed, and what actions to take today.”
                </p>

                <div className="mt-6 rounded-3xl bg-black/30 p-5 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-white">The bulletproof 5</div>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400" />Detect — monitoring + anomaly/threshold detection</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400" />Explain — root-cause narratives tied to drillable data</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400" />Prioritize — role-based daily priorities (what matters today)</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400" />Recommend — next best actions / corrective steps</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400" />Summarize — executive summaries (daily/weekly), consistent format</li>
                  </ul>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl bg-black/30 ring-1 ring-white/10">
                <Image
                  src="/legacy/predictive-ai.png"
                  alt="Kai embedded operator preview"
                  width={1200}
                  height={760}
                  className="h-auto w-full"
                />
              </div>
            </div>

            {/* 04 */}
            <div className="grid gap-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-2 md:items-start">
              <div>
                <div className="text-sm font-semibold text-zinc-300">04.</div>
                <div className="mt-2 text-2xl font-semibold text-white">Unleash the bots</div>
                <p className="mt-4 text-sm leading-6 text-zinc-300">
                  After MergeData + Kai are proven at scale, we layer purpose-built expert agents that operate specific dealership workflows.
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  These are not chatbots; they are department operators with measurable KPIs.
                </p>
              </div>
              <div className="rounded-3xl bg-black/30 p-6 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-white">Roadmap examples</div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />MD Titling Agent — reduces funding friction + title backlog + compliance risk</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />MD Parts Ordering Agent — optimizes parts ordering workflow (including DMS writeback where allowed)</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />MD Inventory Acquisition Agent — improves buy discipline, turn, and margin protection</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />MD Recon Expert Agent — reduces recon days, cost variance, and frontline readiness delays</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />MD Payment Plan Agent — optimizes sales spiffs/incentives for behavior + margin efficiency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations (tiers) */}
      <section id="integrations" className="border-y border-white/10 bg-[#050714]">
        <div className="mx-auto max-w-7xl px-3 py-16 sm:px-4 md:px-6 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Integrations</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              MergeData prioritizes integrations that unlock operator leverage immediately.
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Seamless connections to the dealership systems that matter.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            <div>
              <div className="mt-4">
                <LogoCarousel
                  logos={[
                    { name: "CDK", src: "/legacy/logo-cdk.png", badge: "DMS" },
                    { name: "Dealertrack", src: "/legacy/logo-dealer-track.png", badge: "DMS" },
                    { name: "AutoSoft", src: "/legacy/logo-autosoft.png", badge: "DMS" },
                    { name: "Automate", src: "/legacy/logo-automate.png", badge: "DMS" },
                    { name: "Elead One", src: "/legacy/logo-eleadOne.png", badge: "CRM" },
                    { name: "DealerSocket", src: "/legacy/logo-dealersocket.png", badge: "CRM" },
                    { name: "DealerMine", src: "/legacy/logo-dealermine.png", badge: "CRM" },
                  ]}
                  label="Tier 1 — Must-have for truth + tasks"
                  itemMinWidth={240}
                  itemPaddingY={26}
                  showBadges
                />
              </div>
            </div>

            <div>
              <div className="mt-4">
                <LogoCarousel
                  logos={[
                    { name: "CarGurus", src: "/legacy/logo-cargurus.png", badge: "Other" },
                    { name: "Adam", src: "/legacy/logo-adam.png", badge: "Other" },
                    { name: "RYR", src: "/legacy/logo-ryr.png", badge: "Other" },
                  ]}
                  label="Tier 2 — Closes the loop (behavior → outcomes → accelerators)"
                  itemMinWidth={240}
                  itemPaddingY={26}
                  showBadges
                />
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
            <div className="bg-gradient-to-r from-indigo-500/15 via-fuchsia-500/10 to-cyan-500/10 px-6 py-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-200/90">Bottom line</div>
            </div>
            <div className="px-6 py-6">
              <p className="text-lg font-semibold leading-7 text-white md:text-xl">
                <span className="text-indigo-200">“</span>
                The core priority of MergeData is to increase the data funnel—which reduces the number of screens you need to manage.
                Merge these systems into a unified platform so Kai can turn truth into daily priorities.
                <span className="text-indigo-200">”</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About (revamp: founder cards like legacy) */}
      <section id="about" className="bg-[#050714]">
        <div className="mx-auto max-w-7xl px-3 py-16 sm:px-4 md:px-6 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">About us</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Focused today on what dealerships need in the future.
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              MergeData was born from experienced dealership software executives who struggled to make sense of the modern data landscape in the auto industry.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <a
              href="https://www.linkedin.com/in/josh-blick-07a21ba"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/legacy/josh.png"
                    alt="Josh Blick"
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full ring-1 ring-white/10"
                  />
                  <div>
                    <div className="text-base font-semibold text-white">Josh Blick</div>
                    <div className="mt-1 text-sm text-zinc-300">Co-Founder</div>
                  </div>
                </div>
                <Image
                  src="/legacy/linkedin.png"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                  className="opacity-80 group-hover:opacity-100"
                />
              </div>
              <p className="mt-6 text-sm leading-6 text-zinc-300">
                Specialties: Dealership Software Solutions, Exception Based Reporting, Artificial Intelligence Systems, Automotive Dealership, Machine Learning, Business Intelligence, M&A
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/willpageiii"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/legacy/william.png"
                    alt="William Page III"
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full ring-1 ring-white/10"
                  />
                  <div>
                    <div className="text-base font-semibold text-white">William Page III</div>
                    <div className="mt-1 text-sm text-zinc-300">Co-Founder</div>
                  </div>
                </div>
                <Image
                  src="/legacy/linkedin.png"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                  className="opacity-80 group-hover:opacity-100"
                />
              </div>
              <p className="mt-6 text-sm leading-6 text-zinc-300">
                Highly skilled and experienced professional with a strong background in business development and project management. Proven track record of identifying and capitalizing on new business opportunities.
              </p>
            </a>
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
            <FeatureCard
              title="Unified schema"
              desc="Normalize objects across systems (accounts, deals, subscriptions, invoices) so downstream models stay stable."
            />
            <FeatureCard
              title="Incremental syncs"
              desc="Fast refresh cycles with safe backfills. Tune freshness by source—without blowing up your warehouse bill."
            />
            <FeatureCard
              title="Quality checks"
              desc="Freshness, row counts, nulls, and key uniqueness checks so you catch issues before execs do."
            />
            <FeatureCard
              title="Lineage + docs"
              desc="Know where every field comes from. Ship a dataset that analysts can actually understand."
            />
            <FeatureCard
              title="Role-based access"
              desc="Keep sensitive fields controlled while still enabling broad self-serve analytics."
            />
            <FeatureCard
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
        <div className="mx-auto max-w-7xl px-3 py-16 sm:px-4 md:px-6">
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
