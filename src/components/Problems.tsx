import { ArrowRight } from "lucide-react";
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
      "We take your idea from zero to launch — clean, scalable mobile apps with Flutter & Firebase.",
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-light">
            We Solve Real Problems
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Sound familiar? We&apos;ve got you.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-4">
          {PAIRS.map((p, i) => (
            <Reveal key={p.problem} delay={(i % 3) * 0.06}>
              <div className="grid items-stretch gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-soft transition-colors hover:border-electric/30 md:grid-cols-2">
                <div className="bg-white/[0.015] p-6 sm:p-7">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/35">
                    The problem
                  </span>
                  <p className="mt-2 font-display text-lg font-medium italic text-white/90">
                    &ldquo;{p.problem}&rdquo;
                  </p>
                </div>
                <div className="flex flex-col bg-white/[0.045] p-6 sm:p-7">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-electric-light">
                    <ArrowRight size={13} /> Our solution
                  </span>
                  <p className="mt-2 leading-relaxed text-white/70">
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
