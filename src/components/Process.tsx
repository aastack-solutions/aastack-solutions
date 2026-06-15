import { Search, PenTool, Hammer, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: Search,
    title: "Discover",
    body: "We understand your goals and challenges.",
  },
  {
    icon: PenTool,
    title: "Design",
    body: "We plan and design the solution.",
  },
  {
    icon: Hammer,
    title: "Build",
    body: "We develop with the latest tech.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    body: "We deploy and keep improving.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            Our Process
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            A clear path from idea to launch
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent lg:block"
            aria-hidden
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.12} className="relative text-center">
                <div className="card mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-electric shadow-soft">
                  <s.icon size={24} />
                </div>
                <span className="mt-4 inline-block font-display text-sm font-bold text-electric">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-navy/55">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
