import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="pengalaman" className="scroll-mt-20 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Karier"
          title="Pengalaman Kerja"
          description="Perjalanan profesional saya — dari operasional gerai hingga mengelola usaha sendiri."
        />

        <div className="relative mt-12 space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[19px] before:w-px before:bg-white/10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 100}>
              <article className="relative pl-12">
                <span
                  className={`absolute top-1.5 left-3.5 h-2.5 w-2.5 rounded-full ring-4 ${
                    exp.current
                      ? "bg-emerald-400 ring-emerald-400/20"
                      : "bg-zinc-600 ring-zinc-600/20"
                  }`}
                />
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      <Briefcase size={12} />
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-zinc-950">
                        Terbaru
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-zinc-50">
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-emerald-300">
                    {exp.company}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {exp.description}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-zinc-500">
                    <MapPin size={12} />
                    {exp.address}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
