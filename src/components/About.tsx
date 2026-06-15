import { Target, Code2, ShieldCheck, Gauge, Handshake } from "lucide-react";
import Reveal from "./Reveal";

const STACK = ["Flutter", "Firebase", "React", "JavaScript", "HTML", "CSS"];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Quality without compromise",
    body: "Every build is crafted to a standard we'd put our own name on.",
  },
  {
    icon: Gauge,
    title: "Results that matter",
    body: "We measure success in your outcomes, not just delivered features.",
  },
  {
    icon: Handshake,
    title: "An honest partnership",
    body: "Clear communication and zero surprises, from kickoff to launch.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: who we are + values */}
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
              About AAStack
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Building great digital products
            </h2>
            <p className="mt-5 leading-relaxed text-navy/65">
              We&apos;re AAStack, a team passionate about building great digital
              products. We help businesses leverage technology, AI, powerful
              websites and apps, and better search rankings, combining technical
              expertise with a focus on real, measurable results.
            </p>

            <ul className="mt-8 space-y-4">
              {VALUES.map((v) => (
                <li key={v.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric ring-1 ring-navy/[0.06]">
                    <v.icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-navy">
                      {v.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-navy/60">
                      {v.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="card mt-8 flex items-start gap-4 rounded-2xl p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric text-white shadow-soft">
                <Target size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-navy">
                  Our Mission
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-navy/65">
                  To make advanced technology accessible and profitable for
                  every business.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: founder */}
          <Reveal delay={0.12}>
            <div className="card relative h-full overflow-hidden rounded-3xl p-8 text-navy">
              {/* Soft accent corner */}
              <div
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-electric/15 to-transparent blur-2xl"
                aria-hidden
              />

              <div className="relative flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-violet font-display text-xl font-bold text-white shadow-soft">
                  AA
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-electric">
                    About the Founder
                  </p>
                  <h3 className="font-display text-xl font-bold">
                    Mobile &amp; Web Developer
                  </h3>
                </div>
              </div>

              <p className="relative mt-6 leading-relaxed text-navy/75">
                Hi, I&apos;m a passionate Mobile &amp; Web Developer who builds
                responsive, user-friendly applications. I craft fast, clean,
                modern apps tailored to each client&apos;s needs. My goal:
                deliver high-quality work, on time, that actually solves your
                problem.
              </p>

              <div className="relative mt-8 border-t border-navy/[0.08] pt-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-navy/50">
                  <Code2 size={16} className="text-electric" /> Tech I work with
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {STACK.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-electric/[0.07] px-3 py-1 text-sm font-medium text-navy/80 ring-1 ring-navy/[0.08] transition-colors hover:bg-electric/10 hover:text-electric"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
