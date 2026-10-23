import Image from "next/image";
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 300px at 20% 0%, rgb(52 211 153 / 0.12), transparent 70%), radial-gradient(500px 280px at 85% 20%, rgb(56 189 248 / 0.08), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-5xl items-start gap-10 px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24 lg:grid-cols-[1fr_auto] lg:gap-14">
        {/* Foto profil */}
        <Reveal className="order-first lg:order-last lg:row-span-2 lg:mt-1">
          <div className="relative mx-auto w-40 sm:w-48 lg:w-60">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-emerald-400/25 via-sky-400/10 to-transparent blur-xl"
            />
            <Image
              src="/foto_fauzan.jpeg"
              alt="Foto Fauzan Naufal Anbia"
              width={1148}
              height={1552}
              priority
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 240px"
              className="relative aspect-[3/4] w-full rounded-3xl border border-white/10 object-cover object-top shadow-2xl shadow-black/40 grayscale transition duration-700 hover:grayscale-0"
            />
          </div>
        </Reveal>

        <div className="lg:order-first">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.location}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-50 sm:text-6xl">
            Halo, saya
            <br />
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-sky-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
            >
              <Mail size={16} />
              Hubungi Saya
            </a>
            <a
              href="#pengalaman"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Lihat Pengalaman
              <ArrowDown size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-emerald-400" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-zinc-100"
            >
              <Mail size={15} className="text-emerald-400" />
              {profile.email}
            </a>
            <a
              href={profile.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-zinc-100"
            >
              <Phone size={15} className="text-emerald-400" />
              {profile.phone}
            </a>
          </div>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
