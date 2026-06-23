import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import heroImg from "../../public/images/hero.webp";
import { CALENDLY_URL } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92vh] flex-col overflow-hidden"
    >
      {/* Background image with a slow ambient zoom */}
      <div className="anim-hero-in absolute inset-0 z-0">
        <div className="anim-ambient-zoom absolute inset-0">
          <Image
            src={heroImg}
            alt="AAStack Solutions — web development, AI automation & SEO agency in Pakistan"
            title="AAStack Solutions — Build Smarter. Launch Faster. Rank Higher."
            placeholder="blur"
            priority
            sizes="100vw"
            className="object-cover"
            fill
          />
        </div>
      </div>

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
      <div
        aria-hidden
        className="anim-float-a absolute -left-24 top-24 z-0 h-72 w-72 rounded-full bg-electric/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="anim-float-b absolute -right-24 bottom-28 z-0 h-80 w-80 rounded-full bg-violet/30 blur-[130px]"
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
        <div>
          {/* Glass badge */}
          <div
            className="anim-fade-up mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md sm:text-sm"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
            <span className="text-white/30">·</span>
            <Sparkles size={13} className="text-electric-light" />
            AI, Web & SEO
          </div>

          <p
            className="anim-fade-up mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-electric-light sm:text-sm"
            style={{ animationDelay: "0.27s" }}
          >
            Software · AI · Digital Products
          </p>

          <h1
            className="anim-fade-up mt-4 font-display text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.39s" }}
          >
            Build smarter. Launch faster.{" "}
            <span className="bg-gradient-to-r from-electric-light via-cyan to-electric-light bg-clip-text text-transparent">
              Rank higher.
            </span>
          </h1>

          <p
            className="anim-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl"
            style={{ animationDelay: "0.51s" }}
          >
            AAStack Solutions helps businesses grow with custom AI, modern web
            and mobile apps, and SEO that actually drives traffic.
          </p>

          <div
            className="anim-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "0.63s" }}
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
          </div>

          <div
            className="anim-fade-up mt-9 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3"
            style={{ animationDelay: "0.75s" }}
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
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="anim-cue-in absolute inset-x-0 bottom-7 z-10 flex justify-center"
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <span className="anim-cue-bob h-1.5 w-1 rounded-full bg-white/80" />
        </span>
      </div>
    </section>
  );
}
