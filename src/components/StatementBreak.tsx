export default function StatementBreak() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 px-6 sm:px-12 lg:px-20">
      {/* Organic SVG squiggle overlay */}
      <svg
        aria-hidden
        viewBox="0 0 1200 220"
        fill="none"
        className="pointer-events-none absolute inset-0 h-full w-full text-muted-foreground/15"
        preserveAspectRatio="none"
      >
        <path
          d="M-40 160 C 180 20, 340 210, 560 95 C 760 -10, 920 200, 1240 55"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M-20 80 C 220 210, 440 10, 680 140 C 890 230, 1040 40, 1230 130"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
      </svg>

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="font-headers text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground">
          Mengubah masalah operasional menjadi{" "}
          <span className="highlight-pill">sistem digital</span> yang rapi, cepat, dan{" "}
          <span className="highlight-pill-solid">berdampak nyata.</span>
        </p>
      </div>
    </section>
  );
}
