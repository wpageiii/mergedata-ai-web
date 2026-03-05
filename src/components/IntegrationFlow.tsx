import React from "react";
import Image from "next/image";

type Logo = {
  name: string;
  src: string;
};

const DEFAULT_LOGOS: Logo[] = [
  { name: "CDK", src: "/legacy/logo-cdk.png" },
  { name: "Dealertrack", src: "/legacy/logo-dealer-track.png" },
  { name: "AutoSoft", src: "/legacy/logo-autosoft.png" },
  { name: "Automate", src: "/legacy/logo-automate.png" },
  { name: "Elead One", src: "/legacy/logo-eleadOne.png" },
  { name: "DealerSocket", src: "/legacy/logo-dealersocket.png" },
  { name: "DealerMine", src: "/legacy/logo-dealermine.png" },
  { name: "CarGurus", src: "/legacy/logo-cargurus.png" },
  { name: "Adam", src: "/legacy/logo-adam.png" },
  { name: "RYR", src: "/legacy/logo-ryr.png" },
];

function pickLoop<T>(arr: T[], count: number): T[] {
  const out: T[] = [];
  for (let i = 0; i < count; i++) out.push(arr[i % arr.length]);
  return out;
}

export default function IntegrationFlow({
  logos = DEFAULT_LOGOS,
  density = 14,
}: {
  logos?: Logo[];
  density?: number;
}) {
  // Create a deterministic loop so we don't re-randomize on every render.
  const tiles = pickLoop(logos, density).map((l, i) => {
    const lane = i % 6; // 0..5
    const delay = (i % 7) * 0.65;
    const dur = 9.5 + (i % 5) * 1.75;
    const size = 68 + (i % 4) * 14; // 68..110
    const drift = (lane - 2.5) * 10;

    return {
      ...l,
      key: `${l.name}-${i}`,
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
                  animation: `md-flow-left-to-right ${t.dur}s cubic-bezier(0.22, 1, 0.36, 1) ${t.delay}s infinite`,
                  "--drift": `${t.drift}px`,
                } as React.CSSProperties
              }
            >
              <div className="md-flow-tile-inner relative">
                <Image src={t.src} alt={t.name} fill className="object-contain p-4" />
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
