import { Target, Code2 } from "lucide-react";
import Reveal from "./Reveal";

const STACK = ["Flutter", "Firebase", "React", "JavaScript", "HTML", "CSS"];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* About AAStack */}
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-light">
              About AAStack
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Building great digital products
            </h2>
            <p className="mt-5 leading-relaxed text-white/65">
              We&apos;re AAStack — a team passionate about building great digital
              products. AAStack helps businesses leverage technology: AI,
              powerful websites and apps, and better search rankings. We combine
              technical expertise with a focus on real, measurable results.
            </p>
            <div className="glass mt-6 flex items-start gap-4 rounded-2xl p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-violet text-white shadow-glow">
                <Target size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white">
                  Our Mission
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/65">
                  To make advanced technology accessible and profitable for
                  every business.
                </p>
              </div>
            </div>
          </Reveal>

          {/* About the Founder */}
          <Reveal delay={0.12}>
            <div className="glass-strong relative h-full overflow-hidden rounded-3xl p-8 text-white shadow-soft">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet/20 blur-3xl"
                aria-hidden
              />
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 font-display text-xl font-bold text-electric-light ring-1 ring-white/15">
                  AA
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-electric-light">
                    About the Founder
                  </p>
                  <h3 className="font-display text-xl font-bold">
                    Mobile &amp; Web Developer
                  </h3>
                </div>
              </div>
              <p className="mt-6 leading-relaxed text-white/75">
                Hi, I&apos;m a passionate Mobile &amp; Web Developer who builds
                responsive, user-friendly applications. I craft fast, clean,
                modern apps tailored to each client&apos;s needs. My goal:
                deliver high-quality work, on time, that actually solves your
                problem.
              </p>
              <div className="mt-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-white/50">
                  <Code2 size={16} className="text-electric-light" /> Tech I
                  work with
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {STACK.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/90 ring-1 ring-white/10"
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
