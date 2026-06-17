import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";
import { CONTACT, SOCIAL } from "@/data/site";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/#contact" },
];

const SERVICES = [
  { label: "Web Development", href: "/services" },
  { label: "Mobile Apps", href: "/services" },
  { label: "UI/UX Design", href: "/services" },
  { label: "SEO & Growth", href: "/services" },
  { label: "Cloud & DevOps", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-navy/10 bg-ink-soft/80 text-navy backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-12 lg:gap-12">
          {/* Brand + blurb */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-mark.png"
                alt="AAStack Solutions"
                width={218}
                height={223}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy/55">
              Build Smarter. Launch Faster. Rank Higher. We design and ship
              high-performance web &amp; mobile products that help teams grow.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/[0.06] text-navy transition-colors hover:bg-electric hover:text-white"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-navy/40">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-navy/65 transition-colors hover:text-electric"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-navy/40">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-navy/65 transition-colors hover:text-electric"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-navy/40">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-start gap-3 text-navy/70 transition-colors hover:text-electric"
                >
                  <Mail size={18} className="mt-0.5 shrink-0 text-electric" />
                  <span className="break-all">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="group flex items-start gap-3 text-navy/70 transition-colors hover:text-electric"
                >
                  <Phone size={18} className="mt-0.5 shrink-0 text-electric" />
                  <span>{CONTACT.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-navy/70">
                <MapPin size={18} className="mt-0.5 shrink-0 text-electric" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-3 text-navy/70">
                <Clock size={18} className="mt-0.5 shrink-0 text-electric" />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-navy/10 pt-6 text-center text-sm text-navy/45 sm:flex-row sm:justify-between sm:text-left">
          <p>© 2026 AAStack Solutions. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1 transition-colors hover:text-electric"
            >
              Privacy Policy
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1 transition-colors hover:text-electric"
            >
              Terms
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
