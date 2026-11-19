"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

const QUERY = "Fauzan Naufal Anbia";

export default function Preloader() {
  const [phase, setPhase] = useState<"typing" | "exit" | "done">("typing");
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("fauzan-preloader-seen");
    if (alreadySeen) {
      setPhase("done");
      return;
    }

    let index = 0;
    const typeInterval = setInterval(() => {
      index += 1;
      setTypedCount(index);
      if (index >= QUERY.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setPhase("exit");
          sessionStorage.setItem("fauzan-preloader-seen", "1");
          setTimeout(() => setPhase("done"), 650);
        }, 420);
      }
    }, 45);

    return () => clearInterval(typeInterval);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-6 transition-all duration-700 ease-in-out ${
        phase === "exit" ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      {/* 4 Google-style bouncing dots */}
      <div className="mb-7 flex items-center gap-2.5">
        <span className="h-3 w-3 rounded-full bg-[#4285F4] animate-bounce [animation-delay:-0.3s]" />
        <span className="h-3 w-3 rounded-full bg-[#EA4335] animate-bounce [animation-delay:-0.15s]" />
        <span className="h-3 w-3 rounded-full bg-[#FBBC05] animate-bounce" />
        <span className="h-3 w-3 rounded-full bg-[#34A853] animate-bounce [animation-delay:0.15s]" />
      </div>

      {/* Search bar motif */}
      <div className="flex w-full max-w-md items-center gap-3 rounded-full border border-border bg-secondary/40 px-5 py-3.5 shadow-lg backdrop-blur">
        <Search size={18} className="shrink-0 text-muted-foreground" />
        <span className="font-mono text-sm sm:text-base text-foreground tracking-tight">
          {QUERY.slice(0, typedCount)}
          <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-primary align-middle" />
        </span>
      </div>

      <button
        type="button"
        onClick={() => {
          sessionStorage.setItem("fauzan-preloader-seen", "1");
          setPhase("done");
        }}
        className="mt-8 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
      >
        Skip Intro →
      </button>
    </div>
  );
}
