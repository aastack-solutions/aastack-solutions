"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
  { value: "70%", label: "Support automated" },
  { value: "200%", label: "Organic traffic growth" },
  { value: "10k+", label: "App downloads" },
  { value: "24h", label: "Reply time" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 shadow-sm backdrop-blur"
          >
            <Sparkles size={15} className="text-electric-light" />
            AI Engineering • Web & App • SEO
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Build Smarter.
            <br />
            Launch Faster.{" "}
            <span className="text-gradient">Rank Higher.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl"
          >
            AAStack helps businesses grow with custom AI solutions, modern web
            &amp; mobile apps, and SEO that actually drives traffic.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:shadow-glow-violet hover:brightness-110 sm:w-auto"
            >
              Get a Free Consultation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:border-electric/50 hover:text-electric-light sm:w-auto"
            >
              View Our Work
            </a>
          </motion.div>

          <motion.p variants={item} className="mt-6 text-sm text-white/45">
            Trusted by startups and businesses to design, build, and scale their
            digital products.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.dl
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-soft sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="bg-white/[0.02] px-4 py-6 text-center backdrop-blur transition-colors hover:bg-white/[0.05]"
            >
              <dt className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-white/55">{s.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
