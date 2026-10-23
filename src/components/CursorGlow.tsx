"use client";

import { useEffect, useRef } from "react";

/**
 * Cahaya lembut yang mengikuti posisi kursor.
 * Di layar kecil (<1024px) otomatis nonaktif karena tidak ada kursor.
 * Menghormati preferensi "reduced motion" pengguna.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Hanya aktif di layar lebar (butuh kursor).
    // Catatan: sengaja TIDAK dimatikan oleh "prefers-reduced-motion" —
    // efek ini tidak menggerakkan konten, hanya lapisan cahaya pasif.
    if (window.innerWidth < 1024) return;

    let x = -999;
    let y = -999;

    // Tampilkan langsung di tengah layar supaya efeknya terlihat
    // sejak sebelum kursor digerakkan.
    x = window.innerWidth / 2;
    y = window.innerHeight / 3;

    const paint = () => {
      frame.current = 0;
      el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(52, 211, 153, 0.12), transparent 70%)`;
    };

    paint();
    el.style.opacity = "1";

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = "1";
      // Batasi maksimal 1 kali gambar per frame
      if (!frame.current) frame.current = requestAnimationFrame(paint);
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-500"
    />
  );
}
