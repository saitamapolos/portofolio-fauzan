import { CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="pendidikan" className="scroll-mt-20 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Akademik"
          title="Riwayat Pendidikan"
          description="Jenjang pendidikan formal dari sekolah dasar hingga perguruan tinggi."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={(i % 2) * 100}>
              <article className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20">
                <span className="shrink-0 rounded-xl bg-emerald-400/10 p-2.5">
                  <GraduationCap size={20} className="text-emerald-400" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-zinc-50">{edu.school}</h3>
                  {edu.detail && (
                    <p className="mt-0.5 text-sm font-medium text-emerald-300">
                      {edu.detail}
                    </p>
                  )}
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-zinc-400">
                    <CalendarDays size={12} />
                    {edu.period}
                  </p>
                  <p className="mt-1 flex items-start gap-1.5 text-xs leading-relaxed text-zinc-500">
                    <MapPin size={12} className="mt-0.5 shrink-0" />
                    {edu.address}
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
