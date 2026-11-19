"use client";

import { useEffect, useRef, useState } from "react";

const UNIT_TEXT = "IDEAS ✦ DON'T ✦ WAIT ✦ NEITHER ✦ DO ✦ I ✦ ";

export default function CurvedLoop() {
  const measureRef = useRef<SVGTextElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);
  const [unitLength, setUnitLength] = useState(0);

  const offsetRef = useRef(0);
  const velocityRef = useRef(-1.2);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);

  useEffect(() => {
    if (measureRef.current) {
      const len = measureRef.current.getComputedTextLength();
      if (len > 0) setUnitLength(len);
    }
  }, []);

  useEffect(() => {
    if (!unitLength) return;
    let rafId = 0;

    const animate = () => {
      if (!draggingRef.current) {
        offsetRef.current += velocityRef.current;
        velocityRef.current += (-1.2 - velocityRef.current) * 0.05;
      }

      // Exact modulo wrap by 1 unitLength => 100% seamless infinite loop
      while (offsetRef.current <= -unitLength) {
        offsetRef.current += unitLength;
      }
      while (offsetRef.current > 0) {
        offsetRef.current -= unitLength;
      }

      if (textPathRef.current) {
        textPathRef.current.setAttribute("startOffset", `${offsetRef.current}px`);
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [unitLength]);

  const onPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    draggingRef.current = true;
    lastXRef.current = e.clientX;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    offsetRef.current += dx;
    velocityRef.current = dx * 0.5;
  };

  const onPointerUp = () => {
    draggingRef.current = false;
  };

  const repeated = Array.from({ length: 6 }).fill(UNIT_TEXT).join("");

  return (
    <section
      data-cursor-label="DRAG"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      className="relative flex h-[260px] sm:h-[340px] w-full cursor-grab active:cursor-grabbing items-center justify-center overflow-hidden select-none touch-pan-y"
    >
      <svg viewBox="0 0 1440 320" className="w-full overflow-visible">
        <defs>
          <path id="fauzan-curve" d="M-200,50 Q720,330 1640,50" fill="none" />
        </defs>

        {/* Hidden single-unit measurement text */}
        <text
          ref={measureRef}
          xmlSpace="preserve"
          className="font-headers text-[54px] sm:text-[64px] font-bold uppercase tracking-wider opacity-0 pointer-events-none"
        >
          {UNIT_TEXT}
        </text>

        <text
          xmlSpace="preserve"
          className="font-headers text-[54px] sm:text-[64px] font-bold uppercase tracking-wider fill-foreground/90"
        >
          <textPath ref={textPathRef} href="#fauzan-curve" startOffset="0px">
            {repeated}
          </textPath>
        </text>
      </svg>
    </section>
  );
}
