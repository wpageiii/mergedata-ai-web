import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Reveal } from "@/components/Reveal";

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

        <div className="mx-auto max-w-7xl px-3 pb-16 pt-6 sm:px-4 md:px-6 md:pb-24 md:pt-10">
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

              <div className="mt-6 inline-flex rounded-2xl bg-gradient-to-r from-indigo-500/15 via-fuchsia-500/10 to-cyan-500/10 px-5 py-3 text-base font-bold text-white ring-1 ring-white/15">
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
                  {[
                    "Detect",
                    "Explain",
                    "Prioritize",
                    "Recommend",
                    "Summarize",
                    "Route work",
                  ].map((x) => (
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

      <section id="about" className="bg-[#050714]">
        <div className="mx-auto max-w-7xl px-3 py-16 sm:px-4 md:px-6 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">About us</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Built by dealership operators who’ve scaled this before.
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              It’s not our first rodeo. Our founders helped pioneer dealership reporting and analytics—then came back to rebuild it for an AI-first era.
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
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-500/20">
                  Sales / Ops
                </span>
              </div>
              <p className="mt-5 text-sm leading-6 text-zinc-300">
                “Dealers don’t need more dashboards. They need a daily operating system that tells each leader what changed, why it matters, and what to do next.”
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
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-200 ring-1 ring-indigo-500/25">
                  Technology
                </span>
              </div>
              <p className="mt-5 text-sm leading-6 text-zinc-300">
                “Our goal is to close the gap between actionable reporting and agentic AI—so operators spend less time on tedious screens and more time on the floor, aligned to the core objectives of the dealership.”
              </p>
            </a>
          </div>

          {/* Proof points + POV */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-black/30 p-7 ring-1 ring-white/10">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Credibility</div>
              <div className="mt-3 text-base font-semibold text-white">Executive Eye (2009–2018)</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Our previous product scaled to <span className="text-white">~1,000 rooftops</span> and was acquired by
                <span className="text-white"> CDK Global</span>. We’ve lived dealership operations and we know what breaks when numbers can’t be trusted.
              </p>
            </div>

            <div className="rounded-3xl bg-black/30 p-7 ring-1 ring-white/10">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Why now</div>
              <div className="mt-3 text-base font-semibold text-white">AI changed the bar</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                After our non-compete, we saw a gap forming: legacy tools weren’t built to leverage AI reliably.
                Dealers needed a platform designed for the next decade—not the last.
              </p>
            </div>

            <div className="rounded-3xl bg-black/30 p-7 ring-1 ring-white/10">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">What’s different</div>
              <div className="mt-3 text-base font-semibold text-white">Truth → priorities → automation</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                We unify DMS, CRM, and vendor systems into a single truth layer—then Kai turns that truth into
                daily priorities and workflow automation (&ldquo;unleash the bots&rdquo;).
              </p>
            </div>
          </div>
        </div>
      </section>

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
            <Reveal from="left" delayMs={0}>
              <div className="grid gap-6 rounded-3xl bg-white/10 p-6 ring-1 ring-white/25 md:grid-cols-2 md:items-center">
                <div>
                  <div className="text-sm font-semibold text-zinc-300">01.</div>
                  <div className="mt-2 text-2xl font-semibold text-white">Too many dashboards, not enough time</div>
                  <p className="mt-4 text-sm leading-6 text-zinc-300">
                    We know it. Our previous company was called <span className="text-white">Dashboard</span>—one might say we had a part in
                    creating this mess.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">Dealers do not need another dashboard tool.</p>
                </div>
                <div className="overflow-hidden rounded-3xl bg-black/30 ring-1 ring-white/10">
                  <Image
                    src="/images/ai/too-many-dashboards.png"
                    alt="Too many dashboards"
                    width={1200}
                    height={760}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </Reveal>

            {/* 02 */}
            <Reveal from="right" delayMs={50}>
              <div className="grid gap-6 rounded-3xl bg-black/30 p-6 ring-1 ring-white/10 md:grid-cols-2 md:items-center">
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
                    src="/images/ai/unified-platform.png"
                    alt="Unified platform"
                    width={1200}
                    height={760}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </Reveal>

            {/* 03 */}
            <Reveal from="left" delayMs={75}>
              <div className="grid gap-6 rounded-3xl bg-white/10 p-6 ring-1 ring-white/25 md:grid-cols-2 md:items-center">
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
                    src="/images/ai/kai-operator.png"
                    alt="Kai embedded operator"
                    width={1200}
                    height={760}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </Reveal>

            {/* 04 */}
            <Reveal from="right" delayMs={100}>
              <div className="grid gap-6 rounded-3xl bg-black/30 p-6 ring-1 ring-white/10 md:grid-cols-2 md:items-start">
                <div className="overflow-hidden rounded-3xl bg-black/30 ring-1 ring-white/10">
                  <Image
                    src="/images/ai/unleash-the-bots.png"
                    alt="Unleash the bots"
                    width={1200}
                    height={760}
                    className="h-auto w-full"
                  />
                </div>
                <div className="rounded-3xl bg-black/30 p-6 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-zinc-300">04.</div>
                  <div className="mt-2 text-2xl font-semibold text-white">Unleash the bots</div>
                  <p className="mt-4 text-sm leading-6 text-zinc-300">
                    After MergeData + Kai are proven at scale, we layer purpose-built expert agents that operate specific dealership workflows.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    These are not chatbots; they are department operators with measurable KPIs.
                  </p>

                  <div className="mt-6">
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
            </Reveal>
          </div>
        </div>
      </section>

      <section id="integrations" className="border-y border-white/10 bg-[#050714]">
        <div className="mx-auto max-w-7xl px-3 py-16 sm:px-4 md:px-6 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Integrations</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              MergeData prioritizes integrations that unlock operator leverage immediately.
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">Seamless connections to the dealership systems that matter.</p>
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

      {/* Security & Privacy (concise) */}
      <section id="security" className="bg-[#050714]">
        <div className="mx-auto max-w-7xl px-3 pb-16 sm:px-4 md:px-6">
          <div className="mt-2 rounded-3xl bg-black/30 p-7 ring-1 ring-white/10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-white">Security & privacy</div>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Security is part of the product—not an afterthought. Here’s how we approach it.
                </p>
              </div>
              <Link
                href="/security"
                className="shrink-0 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-300"
              >
                View security
              </Link>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />Least-privilege access and role-based permissions.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />Encrypted data in transit; hardened infrastructure patterns.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />Access limited to authorized personnel; operational auditability.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />Data minimization and controlled retention.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />Customer data is used to operate your account—not to train public models.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />Happy to support security questionnaires during evaluation.</li>
            </ul>

            <div className="mt-4 text-xs text-zinc-400">
              Note: We are not SOC 2 certified today; we can walk you through our standards and controls.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
