import Link from "next/link";
import LinkedinIcon from "./LinkedinIcon";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-soft/80 text-white backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric to-violet text-sm font-bold text-white">
                AA
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                AAStack{" "}
                <span className="font-medium text-electric-light">
                  Solutions
                </span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-white/55">
              Build Smarter. Launch Faster. Rank Higher.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-electric-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-electric"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/45">
          © 2026 AAStack Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
