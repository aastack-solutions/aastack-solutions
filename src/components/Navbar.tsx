"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";
import { CALENDLY_URL } from "@/data/site";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQs", href: "/faqs" },
];

// Pages that open with a dark, full-bleed image hero. While the bar floats over
// that photo (top of page, menu closed) it switches to white text + white logo.
const DARK_HERO_ROUTES = new Set(["/"]);

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Reading-progress line that runs along the very top of the page.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  // Pages with a dark image hero float white text over the photo while at the
  // very top (not scrolled, mobile menu closed). Every other page has a light
  // header, and once scrolled the bar condenses into a floating glass capsule.
  const onDark = DARK_HERO_ROUTES.has(pathname) && !scrolled && !open;
  const floating = scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scroll progress line */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left bg-gradient-to-r from-electric via-violet to-cyan"
      />

      <div
        className={`transition-colors duration-300 ${
          floating
            ? "border-b border-navy/10 bg-white/80 shadow-soft backdrop-blur-xl"
            : open
              ? "border-b border-navy/10 bg-ink/90 backdrop-blur-xl"
              : "border-b border-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
            floating ? "h-16 lg:h-[4.5rem]" : "h-20 lg:h-24"
          }`}
        >
          {/* Brand */}
          <Link
            href="/"
            aria-label="AAStack Solutions home"
            className="group relative flex items-center"
          >
            <span
              className={`absolute -inset-2 -z-10 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hov:opacity-100 ${
                onDark ? "bg-white/20" : "bg-electric/20"
              }`}
            />
            <Image
              src="/images/navbar-logo.png"
              alt="AAStack Solutions"
              width={368}
              height={112}
              priority
              className={`h-9 w-auto object-contain transition-all duration-300 group-hov:scale-[1.03] lg:h-10 ${
                onDark ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 md:flex">
            {LINKS.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative inline-flex items-center rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      onDark
                        ? active
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                        : active
                          ? "text-navy"
                          : "text-navy/55 hover:text-navy"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className={`absolute inset-0 -z-10 rounded-full ring-1 ${
                          onDark
                            ? "bg-white/15 ring-white/25"
                            : "bg-navy/[0.06] ring-navy/10"
                        }`}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2.5">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative hidden items-center gap-1.5 overflow-hidden rounded-2xl px-5 py-2.5 text-sm font-semibold transition-all md:inline-flex ${
                onDark
                  ? "bg-white text-navy hover:shadow-[0_8px_30px_-8px_rgba(255,255,255,0.5)]"
                  : "bg-gradient-to-r from-electric to-violet text-white shadow-[0_8px_24px_-10px_var(--color-electric)] hover:shadow-[0_12px_32px_-8px_var(--color-electric)]"
              }`}
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hov:translate-x-full"
              />
              Free consultation
              <ArrowRight
                size={15}
                className="transition-transform group-hov:translate-x-0.5"
              />
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`grid h-10 w-10 place-items-center rounded-xl transition-colors md:hidden ${
                onDark
                  ? "text-white hover:bg-white/10"
                  : "text-navy hover:bg-navy/[0.06]"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {open ? <X size={22} /> : <Menu size={22} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer (slides in from the right) */}
      <AnimatePresence>
        {open && (
          <div className="md:hidden">
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col border-l border-navy/10 bg-ink/95 shadow-[-24px_0_60px_-24px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
                <Image
                  src="/images/navbar-logo.png"
                  alt="AAStack Solutions"
                  width={368}
                  height={112}
                  className="h-8 w-auto object-contain"
                />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-xl text-navy transition-colors hover:bg-navy/[0.06]"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-5">
                <ul className="flex flex-col gap-1.5">
                  {LINKS.map((l, i) => {
                    const active = isActive(pathname, l.href);
                    return (
                      <motion.li
                        key={l.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + i * 0.05 }}
                      >
                        <Link
                          href={l.href}
                          aria-current={active ? "page" : undefined}
                          className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors ${
                            active
                              ? "bg-navy/[0.06] text-navy ring-1 ring-navy/10"
                              : "text-navy/70 hover:bg-navy/[0.04] hover:text-navy"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                                active
                                  ? "bg-electric"
                                  : "bg-navy/20 group-hov:bg-navy/40"
                              }`}
                            />
                            {l.label}
                          </span>
                          <ArrowRight
                            size={16}
                            className="text-navy/30 transition-transform group-hov:translate-x-0.5 group-hov:text-navy/60"
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer CTA */}
              <div className="border-t border-navy/10 px-5 py-5">
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-electric to-violet px-5 py-4 text-base font-semibold text-white shadow-[0_12px_30px_-10px_rgba(31,127,214,0.7)] transition-all duration-300 active:scale-[0.98] hov:-translate-y-0.5 hov:shadow-[0_18px_40px_-12px_rgba(31,127,214,0.7)]"
                >
                  {/* Shine sweep */}
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hov:translate-x-full"
                  />
                  <span className="relative">Get a free consultation</span>
                  <ArrowRight
                    size={17}
                    className="relative transition-transform duration-300 group-hov:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
