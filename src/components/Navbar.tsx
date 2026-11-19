"use client";

import { useEffect, useRef, useState } from "react";
import { Palette, Plus, X, ArrowUpRight, Check, Volume2 } from "lucide-react";
import { profile, themes } from "@/data/profile";

const navItems = [
  { num: "01", label: "HOME", href: "#top" },
  { num: "02", label: "CAPABILITIES", href: "#what-i-do" },
  { num: "03", label: "PROJECTS", href: "#projects" },
  { num: "04", label: "EXPERIENCE", href: "#experience" },
  { num: "05", label: "EDUCATION", href: "#education" },
];

// Chill Lo-Fi chord progression: Fmaj7 -> Em7 -> Dm7 -> Cmaj7 (in Hz)
const LOFI_CHORDS = [
  [174.61, 220.0, 261.63, 329.63], // Fmaj7
  [164.81, 196.0, 246.94, 293.66], // Em7
  [146.83, 174.61, 220.0, 261.63], // Dm7
  [130.81, 164.81, 196.0, 246.94], // Cmaj7
];

export default function Navbar() {
  const [activeTheme, setActiveTheme] = useState("dark");
  const [themeOpen, setThemeOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [audioOn, setAudioOn] = useState(false);
  const [bars, setBars] = useState([5, 10, 7, 13, 6]);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const schedulerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const vinylNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const themePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("fauzan-theme");
    if (saved && themes.some((t) => t.id === saved)) {
      setActiveTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (themePanelRef.current && !themePanelRef.current.contains(e.target as Node)) {
        setThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (schedulerRef.current) clearInterval(schedulerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  useEffect(() => {
    if (!audioOn) {
      setBars([5, 8, 12, 7, 5]);
      return;
    }
    const id = setInterval(() => {
      setBars([
        4 + Math.floor(Math.random() * 13),
        5 + Math.floor(Math.random() * 13),
        6 + Math.floor(Math.random() * 12),
        4 + Math.floor(Math.random() * 13),
        4 + Math.floor(Math.random() * 12),
      ]);
    }, 180);
    return () => clearInterval(id);
  }, [audioOn]);

  const selectTheme = (id: string) => {
    setActiveTheme(id);
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem("fauzan-theme", id);
  };

  const startLofiEngine = () => {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContextClass();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const master = ctx.createGain();
    master.gain.setValueAtTime(0.001, ctx.currentTime);
    master.gain.exponentialRampToValueAtTime(0.22, ctx.currentTime + 0.6);

    // Warm low-pass filter for authentic lo-fi muffling
    const warmFilter = ctx.createBiquadFilter();
    warmFilter.type = "lowpass";
    warmFilter.frequency.value = 1150;
    warmFilter.Q.value = 0.7;

    warmFilter.connect(master);
    master.connect(ctx.destination);
    masterGainRef.current = master;

    // Subtle vinyl crackle / tape warmth buffer
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      const rand = Math.random() * 2 - 1;
      output[i] = Math.random() > 0.996 ? rand * 0.16 : rand * 0.012;
    }
    const vinyl = ctx.createBufferSource();
    vinyl.buffer = noiseBuffer;
    vinyl.loop = true;
    const vinylGain = ctx.createGain();
    vinylGain.gain.value = 0.12;
    vinyl.connect(vinylGain);
    vinylGain.connect(warmFilter);
    vinyl.start();
    vinylNodeRef.current = vinyl;

    const playChord = (notes: number[], time: number, dur: number) => {
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const noteGain = ctx.createGain();

        osc.type = "triangle";
        osc2.type = "sine";
        // Slight detune for warm tape wobble
        osc.frequency.setValueAtTime(freq, time);
        osc2.frequency.setValueAtTime(freq * 1.003, time);

        const startOffset = idx * 0.025;
        noteGain.gain.setValueAtTime(0.0001, time + startOffset);
        noteGain.gain.linearRampToValueAtTime(0.055, time + startOffset + 0.18);
        noteGain.gain.exponentialRampToValueAtTime(0.001, time + dur);

        osc.connect(noteGain);
        osc2.connect(noteGain);
        noteGain.connect(warmFilter);

        osc.start(time + startOffset);
        osc2.start(time + startOffset);
        osc.stop(time + dur + 0.05);
        osc2.stop(time + dur + 0.05);
      });
    };

    const playKick = (time: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(115, time);
      osc.frequency.exponentialRampToValueAtTime(42, time + 0.14);
      gain.gain.setValueAtTime(0.28, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);
      osc.connect(gain);
      gain.connect(warmFilter);
      osc.start(time);
      osc.stop(time + 0.24);
    };

    const playSnare = (time: number) => {
      const buf = ctx.createBuffer(1, ctx.sampleRate * 0.12, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.035));
      }
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 1400;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.09, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(warmFilter);
      src.start(time);
    };

    const playHat = (time: number) => {
      const buf = ctx.createBuffer(1, ctx.sampleRate * 0.04, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.009));
      }
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const filter = ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.value = 5000;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.035, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(master);
      src.start(time);
    };

    let step = 0;
    const stepMs = 416; // ~72 BPM eighth-note groove

    const tick = () => {
      if (!audioCtxRef.current || audioCtxRef.current.state !== "running") return;
      const now = audioCtxRef.current.currentTime + 0.03;
      const barStep = step % 8;
      const chordIdx = Math.floor(step / 8) % LOFI_CHORDS.length;

      if (barStep === 0) {
        playChord(LOFI_CHORDS[chordIdx], now, 3.2);
        playKick(now);
      } else if (barStep === 2 || barStep === 6) {
        playSnare(now);
      } else if (barStep === 3 || barStep === 5) {
        playKick(now);
      }

      if (barStep % 2 === 1) {
        playHat(now + 0.02); // subtle swung feel
      } else {
        playHat(now);
      }

      step += 1;
    };

    tick();
    schedulerRef.current = setInterval(tick, stepMs);
  };

  const stopLofiEngine = () => {
    if (schedulerRef.current) {
      clearInterval(schedulerRef.current);
      schedulerRef.current = null;
    }
    if (vinylNodeRef.current) {
      try {
        vinylNodeRef.current.stop();
      } catch {
        // ignore
      }
      vinylNodeRef.current = null;
    }
    if (audioCtxRef.current && masterGainRef.current) {
      masterGainRef.current.gain.setTargetAtTime(0.0001, audioCtxRef.current.currentTime, 0.15);
    }
  };

  const toggleAudio = () => {
    if (!audioOn) {
      try {
        startLofiEngine();
      } catch {
        // ignore Web Audio block
      }
      setAudioOn(true);
    } else {
      stopLofiEngine();
      setAudioOn(false);
    }
  };

  return (
    <>
      {/* Fixed 3-pill cluster */}
      <header className="fixed top-5 left-1/2 z-40 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-border/80 bg-background/80 p-1.5 shadow-lg backdrop-blur-md">
          {/* Theme Pill */}
          <div className="relative" ref={themePanelRef}>
            <button
              type="button"
              onClick={() => setThemeOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
              aria-expanded={themeOpen}
            >
              <Palette size={14} className="text-primary" />
              <span>Theme</span>
            </button>

            {themeOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl border border-border bg-background/95 p-3.5 shadow-2xl backdrop-blur-xl">
                <p className="mb-2.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  Choose Theme
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {themes.map((t) => {
                    const isActive = activeTheme === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => selectTheme(t.id)}
                        className={`flex items-center justify-between rounded-xl border px-2.5 py-2 text-xs font-medium transition-all ${
                          isActive
                            ? "border-primary bg-primary/10 text-foreground"
                            : "border-border/60 bg-secondary/40 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className="h-3.5 w-3.5 rounded-full border border-black/15"
                            style={{ backgroundColor: t.swatch }}
                          />
                          {t.name}
                        </span>
                        {isActive && <Check size={12} className="text-primary" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Equalizer Chill Lo-Fi Pill */}
          <button
            type="button"
            onClick={toggleAudio}
            title={audioOn ? "Mute Chill Lo-Fi" : "Play Chill Lo-Fi"}
            aria-label="Toggle chill lofi music"
            className={`flex h-9 items-center gap-2 rounded-full border px-3 transition-all ${
              audioOn
                ? "border-primary bg-primary/10 text-primary"
                : "border-border/60 bg-secondary/60 text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="flex h-[18px] items-center gap-[2.5px]">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className="w-[2px] rounded-full bg-current transition-all duration-150"
                  style={{ height: `${h}px` }}
                />
              ))}
            </span>
            <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-wider">
              {audioOn ? "Lo-Fi On" : "Lo-Fi"}
            </span>
          </button>

          {/* Menu Pill */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            {menuOpen ? <X size={14} /> : <Plus size={14} />}
          </button>
        </div>
      </header>

      {/* StaggeredMenu Full-Height Drawer */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-500 ${
          menuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute top-0 right-0 flex h-full w-full max-w-lg flex-col justify-between border-l border-border bg-background p-8 pt-24 sm:p-12 sm:pt-28 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-3">
            {navItems.map((item, idx) => (
              <a
                key={item.num}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  transitionDelay: menuOpen ? `${80 + idx * 55}ms` : "0ms",
                }}
                className={`group flex items-baseline gap-4 py-1.5 font-headers text-4xl sm:text-5xl font-bold tracking-tight text-foreground transition-all duration-500 hover:text-primary ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <span className="font-mono text-xs font-normal text-primary">{item.num}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="border-t border-border pt-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Connect
              </p>
              <button
                type="button"
                onClick={toggleAudio}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary hover:underline"
              >
                <Volume2 size={13} />
                {audioOn ? "Pause Lo-Fi" : "Play Chill Lo-Fi"}
              </button>
            </div>
            <div className="flex flex-wrap gap-5 text-sm font-medium">
              <a
                href={profile.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                WhatsApp <ArrowUpRight size={14} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                Email <ArrowUpRight size={14} />
              </a>
              <a
                href="https://admin-olshop-hdiz.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                Admin Olshop <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
