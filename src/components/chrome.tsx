import Link from "next/link";
import { profile } from "@/content/profile";
import { nav } from "@/lib/site";
import { LocalTime, NavLinks, ThemeToggle } from "./chrome-client";
import { PaletteButton } from "./command-palette";

export function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav aria-label="Main" className="wrap flex h-14 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 text-sm font-medium tracking-tight">
          <span aria-hidden className="inline-block size-2.5 rounded-full bg-accent ring-1 ring-fg/20" />
          {profile.name}
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          <NavLinks />
          <div className="flex items-center gap-2">
            <PaletteButton />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="no-print mt-28 border-t border-line">
      <div className="wrap py-14 md:py-20">
        <p className="label">Next step</p>
        <Link href="/contact" className="mega mt-4 block text-[clamp(4rem,16vw,12rem)] transition-colors hover:text-accent-text">
          Let&rsquo;s talk<span className="text-accent-text">.</span>
        </Link>

        <div className="mt-14 grid gap-10 border-t border-line pt-8 md:grid-cols-[1fr_auto_auto] md:gap-16">
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Every claim on this site is backed by a repository or a document, or it is left out. Planned work is
            labelled as planned.
          </p>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="link">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="link">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <p className="label mt-12">
          {profile.location}
          <LocalTime timeZone={profile.timeZone} />
        </p>
      </div>
    </footer>
  );
}
