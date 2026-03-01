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
  desc,
  bullets,
  cta,
  href,
  highlight,
}: {
  name: string;
  price: string;
  desc: string;
  bullets: string[];
  cta: string;
  href: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        "rounded-3xl p-7 ring-1 " +
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
          "mt-7 inline-flex h-11 w-full items-center justify-center rounded-full px-5 text-sm font-semibold " +
          (highlight
            ? "bg-white text-black hover:bg-zinc-200"
            : "bg-white/5 text-white ring-1 ring-white/15 hover:bg-white/10")
        }
      >
        {cta}
      </Link>
      <div className="mt-3 text-xs text-zinc-400">
        Pricing here is placeholder—happy to tailor to volume + connectors.
      </div>
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
            desc="$995 / month · $1,990 install (one-time). Merge Data API + standard connections with a dedicated Customer Success agent."
            bullets={[
              "Standard connections for DMS, CRM & Website",
              "Dedicated Merge Data Customer Success agent (install, training, maintenance)",
              "No terms — cancel anytime",
              "$50 in AI token credits included (add more as needed)",
            ]}
            cta="Request a demo"
            href="/contact"
            highlight
          />
          <Plan
            name="Enterprise"
            price="25 stores +"
            desc="For groups that need scale, governance, and custom integrations."
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
