"use client";

import { useEffect, useRef, useState } from "react";
import { showcaseSlides } from "@/data/profile";

function SlideIllustration({ id }: { id: string }) {
  if (id === "web-dev") {
    return (
      <svg viewBox="0 0 360 260" className="w-full max-w-md text-foreground" fill="none">
        <rect x="28" y="28" width="304" height="190" rx="16" stroke="currentColor" strokeWidth="2.5" />
        <line x1="28" y1="62" x2="332" y2="62" stroke="currentColor" strokeWidth="2" />
        <circle cx="52" cy="45" r="5" className="fill-primary" />
        <circle cx="70" cy="45" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="88" cy="45" r="5" stroke="currentColor" strokeWidth="2" />
        <rect x="54" y="86" width="110" height="14" rx="4" className="fill-primary/25" />
        <rect x="54" y="114" width="175" height="10" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <rect x="54" y="136" width="145" height="10" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <rect x="54" y="164" width="90" height="30" rx="15" className="fill-primary" />
        <rect x="245" y="86" width="62" height="108" rx="10" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" />
        <path d="M262 136 L276 150 L294 124" className="stroke-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (id === "ai-assisted") {
    return (
      <svg viewBox="0 0 360 260" className="w-full max-w-md text-foreground" fill="none">
        <circle cx="180" cy="130" r="76" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
        <circle cx="180" cy="130" r="44" className="fill-primary/15 stroke-primary" strokeWidth="2.5" />
        <path d="M180 96 L188 122 L214 130 L188 138 L180 164 L172 138 L146 130 L172 122 Z" className="fill-primary" />
        <circle cx="96" cy="70" r="14" stroke="currentColor" strokeWidth="2" />
        <circle cx="272" cy="74" r="18" stroke="currentColor" strokeWidth="2" />
        <circle cx="264" cy="196" r="14" className="fill-primary/25 stroke-primary" strokeWidth="2" />
        <line x1="108" y1="80" x2="146" y2="108" stroke="currentColor" strokeWidth="1.8" />
        <line x1="256" y1="84" x2="214" y2="110" stroke="currentColor" strokeWidth="1.8" />
        <line x1="252" y1="186" x2="212" y2="154" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (id === "digital-ops") {
    return (
      <svg viewBox="0 0 360 260" className="w-full max-w-md text-foreground" fill="none">
        <rect x="44" y="48" width="120" height="72" rx="12" stroke="currentColor" strokeWidth="2.2" />
        <rect x="196" y="48" width="120" height="72" rx="12" className="fill-primary/15 stroke-primary" strokeWidth="2.2" />
        <rect x="120" y="152" width="120" height="68" rx="12" stroke="currentColor" strokeWidth="2.2" />
        <path d="M104 120 V136 H180 V152" stroke="currentColor" strokeWidth="2" />
        <path d="M256 120 V136 H180" stroke="currentColor" strokeWidth="2" />
        <line x1="66" y1="76" x2="136" y2="76" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="66" y1="96" x2="114" y2="96" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="256" cy="84" r="16" className="fill-primary" />
        <path d="M249 84 L254 89 L264 78" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="144" y1="186" x2="216" y2="186" className="stroke-primary" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 360 260" className="w-full max-w-md text-foreground" fill="none">
      <rect x="76" y="32" width="208" height="196" rx="22" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="180" cy="108" r="34" className="fill-primary/20 stroke-primary" strokeWidth="2.4" />
      <polygon points="171,94 171,122 197,108" className="fill-primary" />
      <rect x="108" y="164" width="144" height="12" rx="6" stroke="currentColor" strokeWidth="2" />
      <rect x="132" y="190" width="96" height="10" rx="5" className="fill-primary/35" />
    </svg>
  );
}

export default function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const translateX = -(progress * (showcaseSlides.length - 1) * 100);

  return (
    <section id="showcase" className="relative">
      {/* Desktop horizontal scroll-driven stage */}
      <div
        ref={containerRef}
        className="hidden lg:block relative"
        style={{ height: `${showcaseSlides.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div
            className="flex h-full will-change-transform transition-transform duration-75 ease-out"
            style={{
              width: `${showcaseSlides.length * 100}vw`,
              transform: `translate3d(${translateX}vw, 0, 0)`,
            }}
          >
            {showcaseSlides.map((slide) => (
              <div
                key={slide.id}
                className="flex h-screen w-screen shrink-0 items-center justify-center px-20"
              >
                <div className="grid w-full max-w-7xl grid-cols-12 items-center gap-12">
                  <div className="col-span-6">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                      {slide.subtitle}
                    </p>
                    <h3 className="mt-4 font-headers text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
                      {slide.title}
                    </h3>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                      {slide.description}
                    </p>
                  </div>
                  <div className="col-span-6 flex justify-center">
                    <div className="rounded-3xl border border-border bg-secondary/30 p-10 shadow-sm">
                      <SlideIllustration id={slide.id} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom progress bar */}
          <div className="pointer-events-none absolute bottom-8 left-20 right-20 flex items-center gap-4">
            <span className="font-mono text-xs text-muted-foreground">
              0{Math.min(showcaseSlides.length, Math.floor(progress * showcaseSlides.length) + 1)} / 0
              {showcaseSlides.length}
            </span>
            <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-border">
              <div
                className="h-full bg-primary transition-all duration-100"
                style={{ width: `${Math.max(8, progress * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stacked fallback */}
      <div className="grid gap-8 px-6 py-16 sm:px-12 lg:hidden">
        {showcaseSlides.map((slide) => (
          <div
            key={slide.id}
            className="rounded-3xl border border-border bg-secondary/30 p-6 sm:p-8"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {slide.subtitle}
            </p>
            <h3 className="mt-3 font-headers text-3xl font-bold tracking-tight text-foreground">
              {slide.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {slide.description}
            </p>
            <div className="mt-6 flex justify-center">
              <SlideIllustration id={slide.id} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
