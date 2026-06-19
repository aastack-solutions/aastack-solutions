"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import heroImg from "../../public/images/hero.jpg";
import { CALENDLY_URL } from "@/data/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92vh] flex-col overflow-hidden"
    >
      {/* Background image with a slow ambient zoom */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
          className="absolute inset-0"
        >
          <Image
            src={heroImg}
            alt=""
            placeholder="blur"
            priority
            sizes="100vw"
            className="object-cover"
            fill
          />
        </motion.div>
      </motion.div>

      {/* Brand overlays: darken for readability + fade into the page below */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,17,43,0.82) 0%, rgba(9,22,58,0.74) 45%, rgba(7,17,43,0.92) 100%)",
        }}
        aria-hidden
      />

      {/* Floating brand glows for depth */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -26, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
        className="absolute -left-24 top-24 z-0 h-72 w-72 rounded-full bg-electric/30 blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 28, 0], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 13, ease: "easeInOut", repeat: Infinity, delay: 1.5 }}
        className="absolute -right-24 bottom-28 z-0 h-80 w-80 rounded-full bg-violet/30 blur-[130px]"
      />

      {/* Subtle dot grid, faded toward the edges */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(75% 60% at 50% 40%, #000 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(75% 60% at 50% 40%, #000 0%, transparent 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 pt-28 pb-32 text-center sm:px-8">
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Glass badge */}
          <motion.div
            variants={item}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
            <span className="text-white/30">·</span>
            <Sparkles size={13} className="text-electric-light" />
            AI, Web & SEO
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-electric-light sm:text-sm"
          >
            Software · AI · Digital Products
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Build smarter. Launch faster.{" "}
            <span className="bg-gradient-to-r from-electric-light via-cyan to-electric-light bg-clip-text text-transparent">
              Rank higher.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl"
          >
            AAStack Solutions helps businesses grow with custom AI, modern web
            and mobile apps, and SEO that actually drives traffic.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-electric to-violet px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_28px_-10px_rgba(31,127,214,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(31,127,214,0.7)] sm:w-auto"
            >
              Get a free consultation
              <ArrowRight
                size={18}
                className="transition-transform group-hov:translate-x-1"
              />
            </Link>
            <Link
              href="/work"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:w-auto"
            >
              View our work
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3"
          >
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-sm text-white/70">
              Trusted by startups and businesses to build and scale their
              digital products.
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute inset-x-0 bottom-7 z-10 flex justify-center"
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-white/80"
          />
        </span>
      </motion.div>
    </section>
  );
}
