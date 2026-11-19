"use client";

import { useEffect, useRef } from "react";
import { techArsenal } from "@/data/profile";

function TechIcon({ id, color }: { id: string; color: string }) {
  switch (id) {
    case "canva":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <circle cx="12" cy="12" r="10" fill={color} />
          <path
            d="M15.4 14.3c-.6.9-1.7 1.6-3.1 1.6-2.3 0-3.8-1.7-3.8-4 0-2.4 1.6-4.1 3.9-4.1 1.3 0 2.3.6 2.9 1.4l-1.3 1c-.4-.5-.9-.8-1.6-.8-1.3 0-2.1 1-2.1 2.5s.8 2.4 2.1 2.4c.8 0 1.4-.4 1.8-.9l1.2.9z"
            fill="#ffffff"
          />
        </svg>
      );
    case "html5":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill={color}>
          <path d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14.3 5.5H8.8l.2 2.3h8.1l-.6 6.8-4.5 1.3-4.5-1.3-.3-3.4h2.2l.2 1.7 2.4.7 2.4-.7.3-2.9H7.1L6.5 5.2h11l-.2 2.3z" />
        </svg>
      );
    case "css3":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill={color}>
          <path d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14.1 5.4l-.3 2.3H9.5l.2 2.1h6.9l-.6 5.6-4 1.2-4-1.2-.3-3h2.2l.1 1.4 2 .6 2-.6.2-2.2H7.7l-.5-6.2h9.9z" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7">
          <rect x="2" y="2" width="20" height="20" rx="3" fill={color} />
          <path
            d="M10.5 16.8c0 1.3-.8 2-2 2-.9 0-1.5-.4-1.9-1l1.1-.7c.2.4.5.6.8.6.4 0 .7-.2.7-.8v-4.6h1.3v4.5zm2.4.3c.4.6.9 1 1.7 1 .7 0 1.1-.3 1.1-.8 0-.5-.4-.7-1.2-1l-.5-.2c-1.2-.5-2-1.1-2-2.3 0-1.2.9-2 2.3-2 1 0 1.7.3 2.2 1.2l-1.2.7c-.3-.4-.6-.6-1-.6-.5 0-.8.3-.8.6 0 .4.3.6 1 .9l.5.2c1.4.6 2.2 1.2 2.2 2.5 0 1.4-1.1 2.2-2.6 2.2-1.4 0-2.3-.7-2.8-1.6l1.1-.8z"
            fill="#111111"
          />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7">
          <rect x="2" y="2" width="20" height="20" rx="3" fill={color} />
          <path
            d="M6.2 12.2h4.4v1.4H9.2v5.2H7.6v-5.2H6.2v-1.4zm5.9 5c.4.4 1 .7 1.7.7.6 0 1-.2 1-.6 0-.4-.3-.6-1.1-.9l-.5-.2c-1.1-.4-1.7-1-1.7-2 0-1.2.9-2 2.3-2 .9 0 1.6.3 2.1.9l-.9 1c-.3-.4-.7-.6-1.2-.6-.5 0-.8.2-.8.5s.3.5 1 .8l.5.2c1.2.4 1.9 1 1.9 2.2 0 1.3-1 2.1-2.5 2.1-1.1 0-2-.4-2.5-1l.7-1.1z"
            fill="#ffffff"
          />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke={color} strokeWidth="1.5">
          <circle cx="12" cy="12" r="2.1" fill={color} stroke="none" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <circle cx="12" cy="12" r="10" className="fill-foreground" />
          <path d="M8.5 16V8l7.8 9.5" className="stroke-background" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="15.5" y1="8" x2="15.5" y2="13.5" className="stroke-background" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill={color}>
          <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9.9 2 2 4.6 2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C15.7 7.1 14.6 6 12 6zM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9.9 2 2 4.6 2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-.9-2-2-4.6-2z" />
        </svg>
      );
    case "supabase":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill={color}>
          <path d="M13.3 21.3c-.5.6-1.5.2-1.5-.6v-7.5h7.6c1 0 1.5 1.1.9 1.9l-7 6.2zM10.7 2.7c.5-.6 1.5-.2 1.5.6v7.5H4.6c-1 0-1.5-1.1-.9-1.9l7-6.2z" />
        </svg>
      );
    case "postgresql":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke={color} strokeWidth="1.8">
          <ellipse cx="12" cy="6.5" rx="7" ry="3" fill={color} fillOpacity="0.2" />
          <path d="M5 6.5v11c0 1.7 3.1 3 7 3s7-1.3 7-3v-11" />
          <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill={color}>
          <path d="M12 2l2.1 6.4L20.5 10.5l-6.4 2.1L12 19l-2.1-6.4L3.5 10.5l6.4-2.1L12 2z" />
          <circle cx="18.5" cy="5.5" r="1.5" />
          <circle cx="5.5" cy="18.5" r="1.2" />
        </svg>
      );
    case "excel":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" fill={color} />
          <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "data":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill={color}>
          <rect x="4" y="13" width="3.5" height="7" rx="1" />
          <rect x="10.25" y="8" width="3.5" height="12" rx="1" />
          <rect x="16.5" y="4" width="3.5" height="16" rx="1" />
        </svg>
      );
    case "social":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke={color} strokeWidth="2">
          <circle cx="18" cy="5" r="3" fill={color} fillOpacity="0.2" />
          <circle cx="6" cy="12" r="3" fill={color} fillOpacity="0.2" />
          <circle cx="18" cy="19" r="3" fill={color} fillOpacity="0.2" />
          <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke={color} strokeWidth="2">
          <circle cx="7" cy="6" r="2.2" fill={color} />
          <circle cx="7" cy="18" r="2.2" fill={color} />
          <circle cx="17" cy="12" r="2.2" fill={color} />
          <path d="M7 8.2v7.6M7 8.2c0 3.8 10 1.6 10 3.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7">
          <polygon points="12,3 22,20 2,20" className="fill-foreground" />
        </svg>
      );
  }
}

export default function TechArsenal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const offsetRef = useRef(0);
  const velocityRef = useRef(-0.65);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);

  useEffect(() => {
    const itemWidth = 148;
    const totalWidth = techArsenal.length * itemWidth;
    let rafId = 0;

    const loop = () => {
      if (!draggingRef.current) {
        offsetRef.current += velocityRef.current;
        velocityRef.current += (-0.65 - velocityRef.current) * 0.04;
      }

      const containerWidth = containerRef.current?.clientWidth || 1000;
      const halfContainer = containerWidth / 2;
      const curveDivisor = Math.max(360, halfContainer * 0.85);

      techArsenal.forEach((_, idx) => {
        const card = cardRefs.current[idx];
        if (!card) return;

        // Exact positive modulo wrap into [-totalWidth/2, totalWidth/2]
        const mod = (((idx * itemWidth + offsetRef.current) % totalWidth) + totalWidth) % totalWidth;
        const wrapped = mod > totalWidth / 2 ? mod - totalWidth : mod;

        const normalized = wrapped / curveDivisor;
        const curveY = Math.min(46, normalized * normalized * 24);
        const rotate = Math.max(-10, Math.min(10, normalized * 5));

        card.style.transform = `translate3d(${halfContainer + wrapped - 62}px, ${24 + curveY}px, 0) rotate(${rotate}deg)`;
      });

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    lastXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velocityRef.current = dx * 0.45;
    offsetRef.current += dx;
  };

  const onPointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center sm:px-12">
        <h2 className="font-headers text-[clamp(3rem,10vw,8.5rem)] font-bold leading-[0.92] tracking-tighter text-foreground">
          Tech &amp; Tools
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
          Tools yang saya pelajari, eksplorasi, dan andalkan untuk membangun sistem &amp; konten.
        </p>
      </div>

      {/* Interactive Draggable Curved Ribbon (DOM-direct RAF, zero wrap-fly glitch) */}
      <div
        ref={containerRef}
        data-cursor-label="DRAG"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative mt-14 h-60 w-full cursor-grab active:cursor-grabbing select-none overflow-hidden touch-pan-y"
      >
        {techArsenal.map((item, idx) => (
          <div
            key={item.id}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            className="group absolute top-0 left-0 w-[124px] will-change-transform"
          >
            <div className="flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-background/90 p-4 shadow-md backdrop-blur-sm transition-colors duration-200 group-hover:border-primary group-hover:-translate-y-1">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: `${item.color}18` }}
              >
                <TechIcon id={item.id} color={item.color} />
              </span>
              <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                {item.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center font-mono text-xs tracking-wider text-muted-foreground">
        YES, you can move this xD — geser ke kiri atau kanan
      </p>
    </section>
  );
}
