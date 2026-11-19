"use client";

import { useEffect, useRef } from "react";

const rows = [
  { text: "WEB DEV", baseDir: -1 },
  { text: "AI PROMPTING", baseDir: 1 },
  { text: "E-COMMERCE", baseDir: -1 },
  { text: "CONTENT", baseDir: 1 },
];

function FourPetalIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="mx-5 sm:mx-8 inline-block h-7 w-7 sm:h-11 sm:w-11 text-primary shrink-0"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20 2 C23 13 27 17 38 20 C27 23 23 27 20 38 C17 27 13 23 2 20 C13 17 17 13 20 2 Z" />
    </svg>
  );
}

export default function DomainMarquees() {
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollBoostRef = useRef(0);
  const hoveredRowRef = useRef<number | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const dy = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      scrollBoostRef.current = Math.max(-18, Math.min(18, dy * 0.35));
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const offsets = rows.map(() => 0);
    let rafId = 0;

    const tick = () => {
      scrollBoostRef.current *= 0.92;

      rows.forEach((row, idx) => {
        const el = trackRefs.current[idx];
        if (!el) return;
        const halfWidth = el.scrollWidth / 2;
        if (halfWidth <= 0) return;

        const speedMultiplier = hoveredRowRef.current === idx ? 0.25 : 1;
        const step = row.baseDir * (0.75 * speedMultiplier) + row.baseDir * Math.abs(scrollBoostRef.current) * 0.25;
        offsets[idx] += step;

        if (offsets[idx] <= -halfWidth) offsets[idx] += halfWidth;
        if (offsets[idx] >= 0) offsets[idx] -= halfWidth;

        el.style.transform = `translate3d(${offsets[idx]}px, 0, 0)`;
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="flex min-h-[65vh] sm:min-h-[75vh] flex-col justify-center overflow-hidden border-y border-border/60 py-14 sm:py-16 select-none">
      <div className="flex flex-col gap-3 sm:gap-5">
        {rows.map((row, idx) => (
          <div
            key={row.text}
            onMouseEnter={() => {
              hoveredRowRef.current = idx;
            }}
            onMouseLeave={() => {
              hoveredRowRef.current = null;
            }}
            className="flex overflow-hidden whitespace-nowrap"
          >
            <div
              ref={(el) => {
                trackRefs.current[idx] = el;
              }}
              className="flex shrink-0 items-center will-change-transform"
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} className="flex items-center">
                  <span className="font-headers text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground/90 transition-colors hover:text-primary">
                    {row.text}
                  </span>
                  <FourPetalIcon />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
