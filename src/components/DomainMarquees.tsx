const rows = [
  { text: "WEB DEV", reverse: false },
  { text: "AI PROMPTING", reverse: true },
  { text: "E-COMMERCE", reverse: false },
  { text: "CONTENT", reverse: true },
];

function FourPetalIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="mx-6 inline-block h-8 w-8 sm:h-12 sm:w-12 text-primary shrink-0"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20 2 C23 13 27 17 38 20 C27 23 23 27 20 38 C17 27 13 23 2 20 C13 17 17 13 20 2 Z" />
    </svg>
  );
}

export default function DomainMarquees() {
  return (
    <section className="flex min-h-[75vh] flex-col justify-center overflow-hidden border-y border-border/60 py-16 select-none">
      <div className="flex flex-col gap-3 sm:gap-5">
        {rows.map((row) => (
          <div key={row.text} className="flex overflow-hidden whitespace-nowrap">
            <div
              className={`flex shrink-0 items-center ${
                row.reverse ? "animate-marquee-right" : "animate-marquee-left"
              }`}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="flex items-center">
                  <span className="font-headers text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground/90">
                    {row.text}
                  </span>
                  <FourPetalIcon />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
