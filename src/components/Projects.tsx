"use client";

import { useState } from "react";
import { ArrowUpRight, Check, CheckCircle2, Copy, MessageCircle, Sparkles } from "lucide-react";
import { profile, projects } from "@/data/profile";

export default function Projects() {
  const mainProject = projects[0];
  const [selectedHighlight, setSelectedHighlight] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              02 / Selected Work
            </p>
            <h2 className="mt-3 font-headers text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
              RECENT PROJECTS
            </h2>
          </div>
          {mainProject.demo && (
            <a
              href={mainProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-secondary/50 px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Lihat Live Demo
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>

        {/* 2-Column Interactive Project Showcase */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Featured Project Card (Admin Olshop) */}
          <div className="lg:col-span-8 group rounded-3xl border border-border bg-secondary/30 p-6 sm:p-8 transition-all duration-300 hover:border-primary/60">
            {/* Interactive Browser Mockup Header */}
            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-md">
              <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-[11px] text-muted-foreground truncate max-w-[220px] sm:max-w-none">
                  admin-olshop-hdiz.vercel.app
                </span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary">
                  LIVE
                </span>
              </div>

              {/* Simulated Interactive App Preview */}
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
                      {mainProject.tagline} · {mainProject.period}
                    </p>
                    <h3 className="mt-1 font-headers text-2xl sm:text-3xl font-bold text-foreground">
                      {mainProject.name}
                    </h3>
                  </div>
                  {mainProject.demo && (
                    <a
                      href={mainProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                    >
                      Buka Live App
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {mainProject.description}
                </p>

                {/* Interactive Feature Tabs */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {["3-Jalur Stok", "Row Locking DB", "CSV Auto-Match", "Excel Rumus Hidup"].map(
                      (tab, idx) => (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setSelectedHighlight(idx)}
                          className={`rounded-full px-3.5 py-1.5 font-mono text-xs transition-all ${
                            selectedHighlight === idx
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "border border-border bg-secondary/50 text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {tab}
                        </button>
                      )
                    )}
                  </div>

                  <div className="mt-3 rounded-2xl border border-border bg-secondary/30 p-4 text-sm text-foreground flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <p className="leading-relaxed">{mainProject.highlights[selectedHighlight]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Strip */}
            <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
              {mainProject.stack.map((tech, i) => (
                <span key={tech} className="inline-flex items-center gap-2">
                  <span className="font-semibold text-foreground">{tech}</span>
                  {i < mainProject.stack.length - 1 && <span className="text-primary">✦</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Secondary Card — Direct Collaboration & Digital Services */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl border border-border bg-secondary/30 p-7 transition-all duration-300 hover:border-primary/60">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles size={22} />
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-widest text-primary">
                Collaboration
              </p>
              <h3 className="mt-2 font-headers text-3xl font-bold tracking-tight text-foreground">
                Butuh Solusi Web atau Konten Digital?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Terbuka untuk peluang kerja full-time, freelance operasional digital, admin
                marketplace, maupun pembuatan sistem web praktis berbasis kebutuhan bisnis.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-2.5 border-t border-border pt-5">
              <a
                href={profile.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-between rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle size={16} />
                  Chat via WhatsApp
                </span>
                <ArrowUpRight size={16} />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex w-full items-center justify-between rounded-2xl border border-border bg-background px-4 py-2.5 text-xs font-mono text-foreground transition-colors hover:border-primary"
              >
                <span className="truncate">{profile.email}</span>
                {copied ? (
                  <span className="inline-flex items-center gap-1 text-primary font-semibold">
                    <Check size={14} /> Copied
                  </span>
                ) : (
                  <Copy size={14} className="text-muted-foreground shrink-0" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
