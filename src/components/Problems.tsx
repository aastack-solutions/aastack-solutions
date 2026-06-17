import Link from "next/link";
import { ArrowRight, Check, Quote } from "lucide-react";
import Reveal, { RevealGroup } from "./Reveal";

const PAIRS = [
  {
    problem: "My website is slow and looks outdated.",
    solution:
      "We build fast, modern, responsive websites that load in seconds and impress your visitors.",
  },
  {
    problem: "I need an app but don't know where to start.",
    solution:
      "We take your idea from zero to launch with clean, scalable mobile apps built on Flutter and Firebase.",
  },
  {
    problem: "My business is invisible on Google.",
    solution:
      "Our SEO gets you found by the right people and drives real, organic traffic.",
  },
  {
    problem: "I waste hours on repetitive tasks.",
    solution:
      "We build AI tools and automation that save your time and cut costs.",
  },
  {
    problem: "I've been let down by developers before.",
    solution:
      "Clear communication, on time delivery, and quality you can count on, every single time.",
  },
];

export default function Problems() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            We Solve Real Problems
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Sound familiar? We&apos;ve got you.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/60 sm:text-lg">
            The headaches you&apos;re living with, and exactly how we fix them.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2">
          {PAIRS.map((p, i) => (
            <Reveal key={p.problem} delay={(i % 2) * 0.08}>
              <div className="group card relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hov:-translate-y-1 hov:border-electric/40 hov:shadow-card-hover">
                {/* Accent bar that fills on hover */}
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-electric to-cyan transition-transform duration-300 group-hov:scale-x-100"
                  aria-hidden
                />

                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy/40">
                  <Quote size={13} className="text-navy/30" />
                  The problem
                </span>
                <p className="mt-2.5 font-display text-base font-semibold italic leading-snug text-navy/90 sm:text-lg">
                  {p.problem}
                </p>

                <div className="my-5 h-px bg-navy/[0.07]" aria-hidden />

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-electric">
                  <Check size={14} strokeWidth={2.5} /> Our solution
                </span>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy/65">
                  {p.solution}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Balancing CTA tile â†’ leads to the detailed case studies */}
          <Reveal delay={0.08}>
            <Link
              href="/case-studies"
              className="group flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-navy/15 bg-navy/[0.015] p-6 text-center transition-colors duration-300 hov:border-electric/40 hov:bg-electric/[0.03]"
            >
              <p className="font-display text-lg font-semibold text-navy">
                Facing a different challenge?
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-navy/55">
                See how we&apos;ve turned real problems into measurable results.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric">
                View case studies
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hov:translate-x-1"
                />
              </span>
            </Link>
          </Reveal>
        </RevealGroup>
      </div>
    </section>
  );
}
