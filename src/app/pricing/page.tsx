import Link from "next/link";
import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";

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
  href,
  highlight,
}: {
  name: string;
  price: string;
  price2?: string;
  desc: string;
  bullets: string[];
  cta: string;
  href: string;
  highlight?: boolean;
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
        {highlight ? (
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
      <ul className="mt-6 space-y-2 text-sm text-zinc-200">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="leading-6">{b}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={
          "mt-7 mt-auto inline-flex h-11 w-full items-center justify-center rounded-full px-5 text-sm font-semibold " +
          (highlight
            ? "bg-white text-black hover:bg-zinc-200"
            : "bg-white/5 text-white ring-1 ring-white/15 hover:bg-white/10")
        }
      >
        {cta}
      </Link>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Pricing that scales with your data.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-300 md:text-base">
          Start with what you need today—add sources, environments, and SLAs as you grow.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Plan
            name="Standard"
            price="$995 / month"
            price2="$1,990 install (one-time)"
            desc="Merge Data API + standard connections with a dedicated Customer Success agent."
            bullets={[
              "Standard connections for DMS, CRM & Website",
              "Includes installation, initial training sessions and daily monitoring for reporting accuracy.",
              "No terms — cancel anytime",
            ]}
            cta="Request a demo"
            href="/contact"
            highlight
          />
          <Plan
            name="Enterprise"
            price="25 stores +"
            desc="Larger dealership groups tend to have unique requirements for integrations, reporting, and AI workflows. We treat these implementations as flexible and tailored—let’s talk through what you need."
            bullets={[
              "Multi-store rollouts + centralized visibility",
              "Custom integrations and SLAs",
              "Security + access controls",
            ]}
            cta="Contact us"
            href="/contact"
          />
        </div>

        <div className="mt-14">
          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
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
