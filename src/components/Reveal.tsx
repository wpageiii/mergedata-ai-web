"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  from = "left",
  delayMs = 0,
}: {
  children: React.ReactNode;
  from?: "left" | "right";
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(() => {
    // Respect reduced motion (avoid setState inside effect to satisfy lint rule)
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (shown) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  const base =
    "transition-all duration-700 ease-out will-change-transform will-change-opacity";
  const hidden = from === "left" ? "opacity-0 -translate-x-8" : "opacity-0 translate-x-8";
  const visible = "opacity-100 translate-x-0";

  return (
    <div
      ref={ref}
      className={`${base} ${shown ? visible : hidden}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
