"use client";

import { useState } from "react";
import { MapPin, Plus } from "lucide-react";
import { experiences } from "@/data/profile";

export default function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          03 / Track Record
        </p>
        <h2 className="mt-3 font-headers text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
          Moments &amp; Experience
        </h2>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {experiences.map((exp, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={exp.company} className="group">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between text-left transition-colors hover:bg-secondary/40 px-2 sm:px-4 rounded-xl"
                >
                  <span className="font-headers text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-foreground">
                    {exp.company}
                  </span>

                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <div className="sm:text-right">
                      <p className="text-sm sm:text-base font-medium text-foreground">
                        <span className="italic text-primary">{exp.tag}</span> {exp.role}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                    </div>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-primary text-primary-foreground border-primary" : ""
                      }`}
                    >
                      <Plus size={18} />
                    </span>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-2 sm:px-4">
                    <div className="rounded-2xl border border-border bg-secondary/30 p-5 sm:p-6">
                      <p className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                        <MapPin size={13} className="text-primary" />
                        {exp.address}
                      </p>
                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground/90">
                        {exp.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
