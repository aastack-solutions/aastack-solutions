import { ArrowRight, Check, Quote } from "lucide-react";
import Reveal from "./Reveal";

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
      "Clear communication, on-time delivery, and quality you can count on, every single time.",
  },
];

export default function Problems() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
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

        <div className="mt-14 space-y-5">
          {PAIRS.map((p, i) => (
            <Reveal key={p.problem} delay={(i % 3) * 0.08}>
              <div className="group relative grid items-stretch overflow-hidden rounded-2xl border border-navy/10 bg-surface shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/30 hover:shadow-card-hover md:grid-cols-[1fr_auto_1fr]">
                {/* Accent bar */}
                <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-electric to-violet transition-transform duration-300 group-hover:scale-y-100" />

                {/* Problem */}
                <div className="p-6 sm:p-8">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy/40">
                    <Quote size={13} className="text-navy/30" />
                    The problem
                  </span>
                  <p className="mt-3 font-display text-lg font-medium italic leading-snug text-navy/90">
                    {p.problem}
                  </p>
                </div>

                {/* Connector */}
                <div className="flex items-center justify-center px-6 md:px-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 bg-ink text-electric transition-all duration-300 group-hover:border-electric/40 group-hover:bg-electric group-hover:text-white">
                    <ArrowRight
                      size={16}
                      className="rotate-90 transition-transform duration-300 group-hover:translate-x-0.5 md:rotate-0"
                    />
                  </span>
                </div>

                {/* Solution */}
                <div className="border-t border-navy/[0.06] bg-navy/[0.015] p-6 transition-colors duration-300 group-hover:bg-electric/[0.04] sm:p-8 md:border-l md:border-t-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-electric">
                    <Check size={14} strokeWidth={2.5} /> Our solution
                  </span>
                  <p className="mt-3 leading-relaxed text-navy/70">
                    {p.solution}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
