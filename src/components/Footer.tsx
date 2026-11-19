import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="relative flex min-h-[82vh] flex-col justify-between border-t border-border bg-secondary/20 px-6 pt-16 pb-8 sm:px-12 lg:px-20"
    >
      {/* Top 4-column directory */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-10 sm:grid-cols-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Links
          </p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium">
            <li>
              <a href="#top" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#what-i-do" className="hover:text-primary transition-colors">
                Capabilities
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-primary transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-primary transition-colors">
                Education
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-primary transition-colors break-all"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href={profile.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                WhatsApp ({profile.phone})
              </a>
            </li>
            <li>
              <a
                href="https://admin-olshop-hdiz.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Admin Olshop (Live)
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Location
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">{profile.location}</p>
          <p className="mt-1 text-xs text-muted-foreground">{profile.country}</p>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Version
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">2026 © Edition</p>
          <p className="mt-1 text-xs text-muted-foreground">Interactive Portfolio</p>
        </div>
      </div>

      {/* Bottom Oversized Wordmark */}
      <div className="mx-auto mt-16 w-full max-w-7xl">
        <div className="mb-3 flex items-center justify-between font-mono text-xs text-muted-foreground">
          <span>{profile.role}</span>
          <a
            href={profile.phoneHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors font-semibold"
          >
            Let&apos;s Connect →
          </a>
        </div>
        <h2 className="w-full text-center font-headers text-[clamp(3.6rem,18.5vw,16rem)] font-bold leading-[0.82] tracking-[0.06em] text-foreground select-none">
          FAUZAN
        </h2>
      </div>
    </footer>
  );
}
