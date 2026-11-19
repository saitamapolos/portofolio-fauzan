"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";
import { education, hardSkills, interests, softSkills } from "@/data/profile";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started.current) {
          started.current = true;
          const duration = 900;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function EducationSkills() {
  const [tab, setTab] = useState<"hard" | "soft" | "interests">("hard");

  const activeList =
    tab === "hard" ? hardSkills : tab === "soft" ? softSkills : interests;

  return (
    <section id="education" className="py-20 sm:py-28 overflow-hidden">
      {/* Dual Velocity Marquee Banner */}
      <div className="border-y border-border/60 py-6 select-none">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex shrink-0 animate-marquee-left">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="mx-6 font-headers text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground/90"
              >
                EDUCATION ✦
              </span>
            ))}
          </div>
        </div>
        <div className="mt-2 flex overflow-hidden whitespace-nowrap">
          <div className="flex shrink-0 animate-marquee-right">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="mx-6 font-headers text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-primary"
              >
                SKILLS &amp; CRAFT ✦
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2-Column Content */}
      <div className="mx-auto mt-20 grid max-w-7xl gap-12 px-6 sm:px-12 lg:grid-cols-12 lg:px-20">
        {/* Left: Floating CountUp Stat Cards + Interactive Skill Tabs */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-border bg-background/70 p-6 shadow-md backdrop-blur transition-transform duration-300 hover:-translate-y-1">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="mt-4 font-headers text-4xl sm:text-5xl font-bold text-foreground">
                <CountUp target={16} suffix="+" />
              </p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Hard, Soft &amp; Tech Skills
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-background/70 p-6 shadow-md backdrop-blur transition-transform duration-300 hover:-translate-y-1">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="mt-4 font-headers text-4xl sm:text-5xl font-bold text-foreground">
                <CountUp target={2026} />
              </p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                S1 Teknik Informatika
              </p>
            </div>
          </div>

          {/* Interactive Skill Filter */}
          <div className="rounded-3xl border border-border bg-secondary/30 p-6">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "hard", label: "Hard Skills" },
                { id: "soft", label: "Soft Skills" },
                { id: "interests", label: "Interests" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTab(item.id as "hard" | "soft" | "interests")}
                  className={`rounded-full px-4 py-1.5 font-mono text-xs font-medium transition-all ${
                    tab === item.id
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {activeList.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-border bg-background px-3.5 py-2 text-xs sm:text-sm font-medium text-foreground transition-colors hover:border-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Education Timeline */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {education.map((edu, idx) => (
            <div
              key={edu.school}
              className={`rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                idx === 0
                  ? "border-primary/50 bg-primary/5"
                  : "border-border bg-secondary/20"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <GraduationCap size={18} />
                  </span>
                  <div>
                    <h3 className="font-headers text-lg sm:text-xl font-bold text-foreground">
                      {edu.school}
                    </h3>
                    {edu.detail && (
                      <p className="text-sm font-medium text-primary">{edu.detail}</p>
                    )}
                  </div>
                </div>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
                  {edu.period}
                </span>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground">{edu.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
