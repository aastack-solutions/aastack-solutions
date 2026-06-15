import Link from "next/link";
import Image from "next/image";
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
    <footer className="relative border-t border-navy/10 bg-ink-soft/80 text-navy backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-mark.png"
                alt="AAStack Solutions"
                width={218}
                height={223}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-navy/55">
              Build Smarter. Launch Faster. Rank Higher.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-navy/65 transition-colors hover:text-electric"
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
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/[0.06] text-navy transition-colors hover:bg-electric hover:text-white"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>

        <div className="mt-10 border-t border-navy/10 pt-6 text-center text-sm text-navy/45">
          © 2026 AAStack Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
