"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, MessageCircleQuestion } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Reveal from "./Reveal";
import { FAQS, CATEGORIES, type Category } from "@/data/faqs";
import { CALENDLY_URL } from "@/data/site";

export default function FAQ() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(FAQS[0].q);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((f) => {
      const matchesCategory = active === "All" || f.category === active;
      const matchesQuery =
        !q ||
        f.q.toLowerCase().includes(q) ||
        f.a.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [active, query]);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {/* Search + category filters */}
        <Reveal>
          <div className="relative">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/40"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              aria-label="Search frequently asked questions"
              className="w-full rounded-2xl border border-navy/10 bg-surface py-3.5 pl-11 pr-4 text-base text-navy shadow-soft outline-none transition-colors placeholder:text-navy/40 focus:border-electric/50 focus:ring-2 focus:ring-electric/20"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={isActive}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-navy/60 hover:text-navy"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="faq-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-electric to-violet"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-navy/[0.05] ring-1 ring-navy/10" />
                  )}
                  {c}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Accordion */}
        <div className="mt-10 space-y-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((f) => {
              const isOpen = open === f.q;
              return (
                <motion.div
                  key={f.q}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className={`card overflow-hidden rounded-2xl transition-colors ${
                    isOpen ? "border-electric/40" : "hover:border-navy/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : f.q)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-electric">
                        {f.category}
                      </span>
                      <span className="mt-1 font-display text-base font-semibold text-navy sm:text-lg">
                        {f.q}
                      </span>
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-electric text-white"
                          : "bg-navy/10 text-navy/70"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-navy/65 sm:px-6">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filtered.length === 0 && (
            <Reveal className="card rounded-2xl px-6 py-12 text-center">
              <p className="font-display text-lg font-semibold text-navy">
                No questions match your search.
              </p>
              <p className="mt-2 text-navy/55">
                Try a different keyword, or just ask us directly.
              </p>
            </Reveal>
          )}
        </div>

        {/* Still have questions */}
        <Reveal className="mt-10">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-electric/15 bg-electric/[0.05] px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-electric/10 text-electric">
                <MessageCircleQuestion size={22} />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-navy">
                  Still have a question?
                </p>
                <p className="mt-1 text-navy/60">
                  Can&apos;t find what you&apos;re looking for? We&apos;re happy to help.
                </p>
              </div>
            </div>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-2xl bg-gradient-to-r from-electric to-violet px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]"
            >
              Ask us anything
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
