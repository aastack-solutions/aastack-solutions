"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "../../public/images/hero.jpg";

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
      className="relative isolate flex min-h-[86vh] flex-col overflow-hidden"
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
            "linear-gradient(180deg, rgba(7,17,43,0.78) 0%, rgba(9,22,58,0.72) 45%, rgba(7,17,43,0.82) 100%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 pt-28 pb-32 text-center sm:px-8">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-electric-light sm:text-sm"
          >
            Software · AI · Digital Products
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl"
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
              href="/#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:bg-electric/90 sm:w-auto"
            >
              Get a free consultation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/work"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:w-auto"
            >
              View our work
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3"
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

    </section>
  );
}
