"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";

export type Logo = {
  name: string;
  src: string;
};

export function LogoCarousel({
  logos,
  label = "Integrations",
  itemMinWidth = 200,
  itemPaddingY = 28,
  showBadges = false,
}: {
  logos: (Logo & { badge?: string })[];
  label?: string;
  itemMinWidth?: number;
  itemPaddingY?: number;
  showBadges?: boolean;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const canScroll = useMemo(() => logos.length > 0, [logos.length]);

  function scrollByAmount(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.8);
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <div className="rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold text-white">{label}</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={!canScroll}
            onClick={() => scrollByAmount("left")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white ring-1 ring-white/10 hover:bg-black/40 disabled:opacity-50"
            aria-label="Scroll integrations left"
          >
            ‹
          </button>
          <button
            type="button"
            disabled={!canScroll}
            onClick={() => scrollByAmount("right")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white ring-1 ring-white/10 hover:bg-black/40 disabled:opacity-50"
            aria-label="Scroll integrations right"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {logos.map((x) => (
          <div
            key={x.name}
            className="snap-start rounded-2xl bg-white/5 ring-1 ring-white/10"
            style={{ minWidth: itemMinWidth }}
            title={x.name}
          >
            <div
              className="flex items-center justify-center px-6"
              style={{ paddingTop: itemPaddingY, paddingBottom: itemPaddingY }}
            >
              <Image
                src={x.src}
                alt={x.name}
                width={180}
                height={56}
                className="h-8 w-auto opacity-90"
              />
            </div>
            {showBadges && x.badge ? (
              <div className="px-4 pb-4">
                <span className="inline-flex items-center rounded-full bg-black/30 px-3 py-1 text-[11px] font-medium text-zinc-200 ring-1 ring-white/10">
                  {x.badge}
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
