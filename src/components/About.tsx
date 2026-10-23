import { GraduationCap, Heart, Sparkles, Wrench } from "lucide-react";
import { hardSkills, interests, softSkills } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function SkillGroup({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Wrench;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-200">
        <Icon size={16} className="text-emerald-400" />
        {title}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="tentang" className="scroll-mt-20 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Tentang"
          title="Tentang Saya"
          description="Saya Fauzan Naufal Anbia — berlatar pendidikan S1 Teknik Informatika dengan pengalaman praktis di operasional usaha, layanan pelanggan, dan konten digital. Terbiasa bekerja langsung dengan pelanggan dan beradaptasi cepat di lingkungan baru."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Reveal delay={100}>
            <SkillGroup icon={Sparkles} title="Soft Skills" items={softSkills} />
          </Reveal>
          <Reveal delay={200}>
            <SkillGroup icon={Wrench} title="Hard Skills" items={hardSkills} />
          </Reveal>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Reveal delay={100}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="rounded-xl bg-emerald-400/10 p-2.5">
                <GraduationCap size={20} className="text-emerald-400" />
              </span>
              <div>
                <h3 className="font-semibold text-zinc-100">Pendidikan</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  S1 Teknik Informatika, Universitas Perjuangan Tasikmalaya
                  (2022–2026).
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="rounded-xl bg-emerald-400/10 p-2.5">
                <Heart size={20} className="text-emerald-400" />
              </span>
              <div>
                <h3 className="font-semibold text-zinc-100">Minat</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {interests.join(" · ")}.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
