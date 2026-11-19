export default function About() {
  return (
    <section
      id="what-i-do"
      className="relative flex min-h-screen flex-col justify-center px-6 py-24 sm:px-12 lg:px-20"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            01 / Introduction
          </p>
          <h2 className="mt-4 font-headers text-[clamp(3.2rem,9vw,7.5rem)] font-bold leading-[0.9] tracking-tight text-muted-foreground/35">
            WHAT
            <br />
            I DO?
          </h2>
        </div>

        <div className="lg:col-span-7 lg:text-right">
          <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl lg:text-2xl">
            Saya seorang <span className="highlight-pill">digital builder</span> dari Tasikmalaya
            yang menggabungkan latar belakang Teknik Informatika dengan pengalaman langsung di
            operasional retail, layanan digital, dan produksi konten.
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
            Saya peduli bagaimana sebuah sistem bekerja di balik layar sama besarnya dengan
            tampilannya — menjaga kerapian alur data, kecepatan eksekusi dengan AI-assisted
            workflow, dan memastikan apa yang dibangun bukan sekadar konsep, tapi benar-benar{" "}
            <span className="highlight-pill-solid">siap pakai.</span>
          </p>

          <div className="mt-10 flex lg:justify-end">
            <a
              href="#showcase"
              className="inline-flex items-center gap-3 rounded-full border border-border bg-secondary/60 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-current" />
              How I Got Here 👇
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
