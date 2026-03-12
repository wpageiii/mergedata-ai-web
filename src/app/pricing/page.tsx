import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { DemoRequestButton } from "@/components/DemoRequestButton";

export const metadata: Metadata = {
  title: "Pricing",
};

function Plan({
  name,
  price,
  price2,
  desc,
  bullets,
  cta,
  highlight,
  badge,
}: {
  name: string;
  price: string;
  price2?: string;
  desc: string;
  bullets: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={
        "rounded-3xl p-7 ring-1 flex h-full flex-col " +
        (highlight
          ? "bg-white/10 ring-white/20"
          : "bg-white/5 ring-white/10")
      }
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">{name}</div>
        {badge ? (
          <span className="rounded-full bg-emerald-400 px-2 py-1 text-xs font-semibold text-black">
            {badge}
          </span>
        ) : highlight ? (
          <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-black">
            Most popular
          </span>
        ) : null}
      </div>
      <div className="mt-4 text-3xl font-semibold text-white">{price}</div>
      {price2 ? (
        <div className="mt-2 text-3xl font-semibold text-white">{price2}</div>
      ) : null}
      <div className="mt-2 text-sm text-zinc-300">{desc}</div>
      <ul className="mt-6 space-y-2 text-sm text-zinc-200 mb-10">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="leading-6">{b}</span>
          </li>
        ))}
      </ul>
      <DemoRequestButton
        className={
          "mt-auto inline-flex h-11 w-full items-center justify-center rounded-full px-5 text-sm font-semibold " +
          (highlight
            ? "bg-white text-black hover:bg-zinc-200"
            : "bg-white/5 text-white ring-1 ring-white/15 hover:bg-white/10")
        }
      >
        {cta}
      </DemoRequestButton>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070A1A] via-black to-black text-white">
      <SiteNav />
      <main className="relative mx-auto max-w-6xl px-4 py-9 md:py-12">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Pricing that scales with your data.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-300 md:text-base">
          Start with what you need today—our installation process typically runs in about 30 days.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Plan
            name="Standard"
            price="$995 / month"
            price2="$1,990 install (one-time)"
            desc="Merge Data API + standard connections with a dedicated Customer Success agent."
            bullets={[
              "Standard connections for DMS, CRM & Website",
              "Includes installation, training sessions and daily monitoring for accuracy.",
              "No terms — cancel anytime",
            ]}
            cta="Request a demo"
            highlight
          />
          <Plan
            name="Enterprise"
            badge="Customizable"
            price="25 stores +"
            desc="Larger dealership groups tend to have unique requirements for integrations, reporting, and AI workflows. We treat these implementations as flexible and tailored—let’s talk through what you need."
            bullets={[
              "Multi-store rollouts + centralized visibility",
              "Custom integrations and SLAs",
              "No terms — cancel anytime",
            ]}
            cta="Contact us"
          />
        </div>

        <div className="mt-11">
          <div className="relative overflow-hidden rounded-3xl bg-white/5 p-8 ring-1 ring-emerald-400/20">
            <div className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="text-sm font-semibold text-white">AI token credits</div>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Standard includes up to <span className="font-semibold text-white">$50</span> in token credits.
              Teams with higher AI usage requirements can add additional token credits as needed.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
