"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Bot,
  TrendingUp,
  Smartphone,
  Clock,
  Star,
} from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const STATS = [
  { icon: Bot, value: "70%", label: "Support automated" },
  { icon: TrendingUp, value: "200%", label: "Organic traffic growth" },
  { icon: Smartphone, value: "10k+", label: "App downloads" },
  { icon: Clock, value: "24h", label: "Reply time" },
];

const TECH = [
  "AI Engineering",
  "Next.js",
  "React",
  "Flutter",
  "Firebase",
  "Web Apps",
  "Mobile Apps",
  "SEO",
  "Automation",
  "E-commerce",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28"
    >
      {/* Focused spotlight glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-6rem] -z-0 h-[34rem] w-[64rem] max-w-[120vw] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(56,189,248,0.18), rgba(139,92,246,0.12) 45%, transparent 72%)",
        }}
      />
      {/* Decorative slow-spinning conic ring */}
      <div
        aria-hidden
        className="animate-spin-slow pointer-events-none absolute left-1/2 top-[-10rem] -z-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full opacity-30 blur-2xl"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, rgba(56,189,248,0.35), transparent 30%, rgba(139,92,246,0.35), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Live badge */}
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 py-1.5 pl-2 pr-4 text-sm font-medium text-white/80 shadow-sm backdrop-blur"
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="hidden sm:inline">Available for new projects</span>
            <span className="h-3.5 w-px bg-white/20" aria-hidden />
            <span className="inline-flex items-center gap-1.5 text-electric-light">
              <Sparkles size={14} /> AI • Web • SEO
            </span>
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Build Smarter.
            <br />
            Launch Faster.{" "}
            <span className="relative whitespace-nowrap text-gradient">
              Rank Higher.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl"
          >
            AAStack Solutions helps businesses grow with custom AI, modern web
            &amp; mobile apps, and SEO that actually drives traffic.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:shadow-glow-violet hover:brightness-110 sm:w-auto"
            >
              Get a Free Consultation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/work"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:border-electric/50 hover:text-electric-light sm:w-auto"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            variants={item}
            className="mt-7 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3"
          >
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </span>
            <span className="text-sm text-white/55">
              Trusted by startups &amp; businesses to build and scale their
              digital products.
            </span>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.dl
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="group glass rounded-2xl px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-glow"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-violet/20 text-electric-light ring-1 ring-white/10 transition-colors group-hover:from-electric group-hover:to-violet group-hover:text-white">
                <s.icon size={20} />
              </div>
              <dt className="mt-4 font-display text-3xl font-bold text-gradient sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-white/55">{s.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="marquee-mask relative mt-16 flex overflow-hidden"
      >
        <div className="animate-marquee flex shrink-0 items-center gap-3 pr-3">
          {[...TECH, ...TECH].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-white/45"
            >
              {t}
              <span className="h-1 w-1 rounded-full bg-electric-light/50" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
