import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Footer() {
  return (
    <footer id="kontak" className="scroll-mt-20 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Kontak"
          title="Mari Terhubung"
          description="Tertarik bekerja sama atau sekadar menyapa? Silakan hubungi saya melalui salah satu kanal berikut."
        />

        <Reveal delay={100}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-emerald-400/40"
            >
              <span className="inline-block rounded-xl bg-emerald-400/10 p-2.5">
                <Mail size={20} className="text-emerald-400" />
              </span>
              <p className="mt-4 text-sm font-medium text-zinc-400">Email</p>
              <p className="mt-1 text-sm font-semibold break-all text-zinc-100 group-hover:text-emerald-300">
                {profile.email}
              </p>
            </a>
            <a
              href={profile.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-emerald-400/40"
            >
              <span className="inline-block rounded-xl bg-emerald-400/10 p-2.5">
                <Phone size={20} className="text-emerald-400" />
              </span>
              <p className="mt-4 text-sm font-medium text-zinc-400">
                Telepon / WhatsApp
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-100 group-hover:text-emerald-300">
                {profile.phone}
              </p>
            </a>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="inline-block rounded-xl bg-emerald-400/10 p-2.5">
                <MapPin size={20} className="text-emerald-400" />
              </span>
              <p className="mt-4 text-sm font-medium text-zinc-400">Alamat</p>
              <p className="mt-1 text-sm leading-relaxed font-semibold text-zinc-100">
                {profile.address}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {2026} {profile.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="font-mono">Dibangun dengan Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
