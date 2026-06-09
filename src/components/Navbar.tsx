"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/80 shadow-soft backdrop-blur-xl"
          : "bg-gradient-to-b from-ink/70 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
        {/* Brand */}
        <Link
          href="/"
          aria-label="AAStack Solutions — home"
          className="group flex items-center gap-2.5"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric to-violet text-sm font-bold text-white shadow-glow transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            AA
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap">
            AAStack{" "}
            <span className="font-medium text-electric-light">Solutions</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-flex items-center rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-white"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/15"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
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
            href="/#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition-all hover:bg-electric hover:ring-electric hover:shadow-glow md:inline-flex"
          >
            Free Consultation
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {LINKS.map((l, i) => {
                const active = isActive(pathname, l.href);
                return (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        active
                          ? "bg-white/10 text-white ring-1 ring-white/15"
                          : "text-white/75 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {l.label}
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-electric-light" />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + LINKS.length * 0.05 }}
                className="pt-2"
              >
                <Link
                  href="/#contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-5 py-3 text-base font-semibold text-white shadow-glow"
                >
                  Get a Free Consultation
                  <ArrowRight size={17} />
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
