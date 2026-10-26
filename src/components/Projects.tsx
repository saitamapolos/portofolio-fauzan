import { ExternalLink, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="proyek" className="scroll-mt-20 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Karya"
          title="Proyek"
          description="Bukan hanya daftar teknologi — ini yang sudah saya bangun dan bisa Anda coba sendiri."
        />

        <div className="mt-12 space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 100}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-emerald-400/30">
                {/* garis aksen atas */}
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      <Sparkles size={12} />
                      {project.period}
                    </span>
                    {project.featured && (
                      <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-zinc-950">
                        Proyek Utama
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-zinc-50 sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-emerald-300">
                    {project.tagline}
                  </p>

                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  {/* hal teknis yang menarik */}
                  <ul className="mt-5 space-y-2.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-emerald-400/70"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* teknologi */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* tombol */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
                      >
                        <ExternalLink size={15} />
                        Buka Aplikasi
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/5"
                      >
                        <Code2 size={15} />
                        Lihat Kode
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
