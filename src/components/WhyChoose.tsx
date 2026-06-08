import {
  Rocket,
  Target,
  Cpu,
  Gem,
  Handshake,
  Zap,
} from "lucide-react";
import Reveal from "./Reveal";

const REASONS = [
  {
    icon: Rocket,
    title: "We Deliver, Not Just Promise",
    body: "No empty talk. We ship real, working products, on time, every time.",
  },
  {
    icon: Target,
    title: "Results That Matter",
    body: "More traffic, more users, more sales. We focus on outcomes you can measure.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    body: "AI, modern frameworks, and the latest tools. We build for today and tomorrow.",
  },
  {
    icon: Gem,
    title: "Quality Without Compromise",
    body: "Every line of code, every design, every detail, crafted to the highest standard.",
  },
  {
    icon: Handshake,
    title: "Your Partner, Not Just a Vendor",
    body: "We're with you from idea to launch and beyond.",
  },
  {
    icon: Zap,
    title: "Fast, Transparent, Reliable",
    body: "Clear communication, quick turnaround, zero surprises.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-20 text-white sm:py-28">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-light">
            Why Choose AAStack
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            We don&apos;t just build products —{" "}
            <span className="text-gradient">we build growth.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08}>
              <div className="group glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-violet/20 text-electric-light ring-1 ring-white/10 transition-colors group-hover:from-electric group-hover:to-violet group-hover:text-white">
                  <r.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="font-display text-xl font-medium text-white/90 sm:text-2xl">
            We turn your ideas into{" "}
            <span className="text-electric-light">powerful digital solutions.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
