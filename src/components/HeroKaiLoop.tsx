"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Step = {
  label: string;
  img: string;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export default function HeroKaiLoop({ intervalMs = 2600 }: { intervalMs?: number }) {
  const steps: Step[] = useMemo(
    () => [
      { label: "Extract", img: "/images/ai/hero-loop/extract.png" },
      { label: "Detect", img: "/images/ai/hero-loop/detect.png" },
      { label: "Prioritize", img: "/images/ai/hero-loop/prioritize.png" },
      { label: "Explain", img: "/images/ai/hero-loop/explain.png" },
      { label: "Monitor", img: "/images/ai/hero-loop/monitor.png" },
      { label: "Drive Profit", img: "/images/ai/hero-loop/drive-profit.png" },
    ],
    []
  );

  const reducedMotion = usePrefersReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const t = window.setInterval(() => {
      setIdx((v) => (v + 1) % steps.length);
    }, intervalMs);
    return () => window.clearInterval(t);
  }, [intervalMs, reducedMotion, steps.length]);

  return (
    <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
      {/* Big looping word (above) */}
      <div className="text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">Mode</div>
        <div className="mt-1 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
          {steps[idx]?.label}
        </div>
      </div>

      {/* Frame stack */}
      <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-white/10">
        <div className="relative aspect-[16/10] w-full bg-black/30">
          {steps.map((s, i) => (
            <Image
              key={s.label}
              src={s.img}
              alt={`${s.label} frame`}
              fill
              className={`object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
              priority={i === 0}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-zinc-300">
        {steps.map((s) => (
          <div
            key={s.label}
            className={`rounded-full px-3 py-2 text-center ring-1 ring-white/10 ${
              s.label === steps[idx]?.label ? "bg-indigo-500/20 text-white" : "bg-black/30"
            }`}
          >
            {s.label}
          </div>
        ))}
      </div>

      {reducedMotion ? (
        <p className="mt-3 text-center text-xs text-zinc-500">Animation disabled (Reduce Motion).</p>
      ) : null}
    </div>
  );
}
