"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "How much does a project cost?",
    a: "Every project is priced on scope, not a fixed menu. After a quick free consultation we send a clear, itemized quote with no hidden fees — so you know exactly what you're paying for before we start.",
  },
  {
    q: "How long does it take to build a website or app?",
    a: "A focused website typically takes 2–4 weeks, while web or mobile apps usually run 4–10 weeks depending on features. We share a realistic timeline up front and keep you updated at every milestone.",
  },
  {
    q: "Can you add AI to my existing business or product?",
    a: "Yes. We build custom chatbots, AI agents, and automation that plug into the tools you already use — no need to rebuild from scratch. We start small, prove the value, then scale.",
  },
  {
    q: "Do you offer SEO and ongoing support?",
    a: "Absolutely. Beyond launch we offer SEO, performance tuning, security updates, and feature improvements. Think of us as a long-term partner, not a one-time vendor.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Definitely. From first-time founders with an idea to established businesses scaling up, we tailor the approach and budget to where you are — and grow with you.",
  },
  {
    q: "What happens after my project launches?",
    a: "We monitor, maintain, and optimize. You get post-launch support, performance reports, and a direct line to us whenever you need changes or have questions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-light">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Questions? <span className="text-gradient">Answered.</span>
          </h2>
          <p className="mt-4 text-lg text-white/55">
            Everything you need to know before we get started.
          </p>
        </Reveal>

        <Reveal className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`glass overflow-hidden rounded-2xl transition-colors ${
                  isOpen ? "border-electric/40" : "hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-display text-base font-semibold text-white sm:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-gradient-to-br from-electric to-violet text-white"
                        : "bg-white/10 text-white/70"
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
                      <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-white/65 sm:px-6">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
