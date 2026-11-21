"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-between px-6 pt-28 pb-12 sm:px-12 lg:px-20 lg:pt-32 lg:pb-16"
    >
      {/* Top-left giant display heading */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <h1 className="font-headers text-[clamp(4.2rem,19vw,15.5rem)] font-bold leading-[0.88] tracking-tighter text-foreground select-none">
          Halo,
        </h1>

        {/* Interactive 3D tilt portrait & location badge */}
        <div
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{
            transform: `perspective(700px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          }}
          className="flex items-center gap-4 self-start rounded-2xl border border-border bg-secondary/40 p-3 pr-5 backdrop-blur-sm transition-transform duration-200 ease-out shadow-sm"
        >
          <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-border shrink-0">
            <Image
              src="/foto_fauzan.jpeg"
              alt={profile.name}
              width={200}
              height={260}
              priority
              className="h-full w-full object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
            />
          </div>
          <div className="text-xs space-y-1">
            <p className="font-semibold text-foreground">{profile.name}</p>
            <p className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin size={11} className="text-primary shrink-0" />
              <span>{profile.location}</span>
            </p>
            <p className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Available for Work
            </p>
          </div>
        </div>
      </div>

      {/* Bottom-right giant display heading + highlighted sub-headline */}
      <div className="mt-12 flex flex-col items-end text-right">
        <p className="mb-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
          Lulusan <span className="highlight-pill">S1 Teknik Informatika</span> &amp;{" "}
          <span className="highlight-pill">IT Support</span> yang mengubah ide
          mentah dan kebutuhan operasional menjadi{" "}
          <span className="highlight-pill">sistem web</span> &amp;{" "}
          <span className="highlight-pill">solusi digital</span> yang benar-benar jalan.
        </p>

        <h2 className="font-headers text-[clamp(4.2rem,16vw,13.5rem)] font-bold leading-[0.88] tracking-tighter text-foreground select-none">
          I&apos;m {profile.shortName}
        </h2>
      </div>
    </section>
  );
}
