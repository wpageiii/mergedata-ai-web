import React from "react";
import Image from "next/image";

type Logo = {
  name: string;
  src: string;
  badge: "DMS" | "CRM" | "Other";
};

const DEFAULT_LOGOS: Logo[] = [
  { name: "CDK", src: "/legacy/logo-cdk.png", badge: "DMS" },
  { name: "Dealertrack", src: "/legacy/logo-dealer-track.png", badge: "DMS" },
  { name: "AutoSoft", src: "/legacy/logo-autosoft.png", badge: "DMS" },
  { name: "Automate", src: "/legacy/logo-automate.png", badge: "DMS" },
  { name: "Elead One", src: "/legacy/logo-eleadOne.png", badge: "CRM" },
  { name: "DealerSocket", src: "/legacy/logo-dealersocket.png", badge: "CRM" },
  { name: "DealerMine", src: "/legacy/logo-dealermine.png", badge: "CRM" },
  { name: "CarGurus", src: "/legacy/logo-cargurus.png", badge: "Other" },
  { name: "Adam", src: "/legacy/logo-adam.png", badge: "Other" },
  { name: "RYR", src: "/legacy/logo-ryr.png", badge: "Other" },
];

export default function IntegrationFlow({
  logos = DEFAULT_LOGOS,
  density = 14,
}: {
  logos?: Logo[];
  density?: number;
}) {
  // Deterministic: ensure each visible "batch" is 4 distinct companies (no repeats inside the group).
  const groupSize = 4;

  const tiles = Array.from({ length: density }).map((_, i) => {
    const lane = i % 6; // 0..5

    const group = Math.floor(i / groupSize);
    const pos = i % groupSize;
    const logo = logos[(group * groupSize + pos) % logos.length];

    // Stagger group starts so batches drift across with breathing room (less overlap).
    const delay = group * 6.0 + pos * 0.75;

    const dur = 42 + (i % 5) * 6.5;
    const size = 170 + (i % 4) * 22; // 170..236
    const drift = (lane - 2.5) * 10;

    return {
      ...logo,
      key: `${logo.name}-${i}`,
      lane,
      delay,
      dur,
      size,
      drift,
    };
  });

  return (
    <div className="relative overflow-hidden rounded-3xl bg-black/30 ring-1 ring-white/10">
      {/* background hero */}
      <div className="relative aspect-[16/8.2] w-full">
        <Image
          src="/images/ai/integrations-flow-hero.png"
          alt="Kai + MergeData integrations"
          fill
          priority={false}
          className="object-cover object-right"
        />

        {/* subtle vignette for contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050714]/65 via-transparent to-[#050714]/35" />

        {/* animated tiles */}
        <div className="pointer-events-none absolute inset-0">
          {tiles.map((t) => (
            <div
              key={t.key}
              className="md-flow-tile"
              style={
                {
                  width: `${t.size}px`,
                  height: `${t.size}px`,
                  top: `${10 + t.lane * 14}%`,
                  animation: `md-flow-left-to-right ${t.dur}s linear ${t.delay}s infinite both`,
                  "--drift": `${t.drift}px`,
                } as React.CSSProperties
              }
            >
              <div className="md-flow-tile-inner relative">
                <Image src={t.src} alt={t.name} fill className="object-contain p-0.5" />

                <div
                  className={`md-flow-badge ${
                    t.badge === "DMS"
                      ? "md-flow-badge-dms"
                      : t.badge === "CRM"
                        ? "md-flow-badge-crm"
                        : "md-flow-badge-other"
                  }`}
                >
                  {t.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4">
        <p className="text-xs text-zinc-400">
          <span className="font-semibold text-zinc-200">Tier 1 + Tier 2</span> integrations floating into Kai → MergeData.
          <span className="ml-2 text-zinc-500">(Animated on desktop. Hidden if “Reduce motion” is enabled.)</span>
        </p>
      </div>
    </div>
  );
}
