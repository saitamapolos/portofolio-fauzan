"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement | null;
      const dragEl = target?.closest("[data-cursor-label]");
      if (dragEl) {
        setLabel(dragEl.getAttribute("data-cursor-label"));
        setHovered(true);
        return;
      }

      const interactive = target?.closest("a, button, [role='button']");
      setLabel(null);
      setHovered(Boolean(interactive));
    };

    const tick = () => {
      currentX += (mouseX - currentX) * 0.22;
      currentY += (mouseY - currentY) * 0.22;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className={`pointer-events-none fixed top-0 left-0 z-[90] hidden md:flex items-center justify-center rounded-full bg-primary text-primary-foreground transition-[width,height,opacity] duration-200 ${
        label
          ? "h-16 w-16 text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg"
          : hovered
          ? "h-9 w-9 opacity-80 mix-blend-difference"
          : "h-5 w-5 opacity-90"
      }`}
    >
      {label ?? null}
    </div>
  );
}
