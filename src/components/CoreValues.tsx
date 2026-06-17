import {
  ShieldCheck,
  Gem,
  Lightbulb,
  Target,
  Handshake,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Reveal, { RevealGroup } from "./Reveal";

type Value = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const VALUES: Value[] = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    body: "Clear communication and zero surprises, from kickoff to launch and long after go-live.",
  },
  {
    icon: Gem,
    title: "Quality Craft",
    body: "Clean code, thoughtful design, and no shortcuts, every build is one we'd put our own name on.",
  },
  {
    icon: Lightbulb,
    title: "Always Innovating",
    body: "AI, modern frameworks, and the latest tools, we build for today and what's coming next.",
  },
  {
    icon: Target,
    title: "Results That Matter",
    body: "More bookings, better rankings, faster sites, we measure success in your outcomes.",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    body: "We're with you from idea to launch and beyond, a partner, not just a vendor.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    body: "Quick turnaround and dependable delivery, on time, every time, no excuses.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            Our Core Values
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            What We <span className="text-accent">Stand For</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-navy/60">
            The principles behind every line of code we write and every product
            we ship.
          </p>
        </Reveal>

        {/* Gradient panel holding the value grid, like the reference layout */}
        <Reveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-violet p-6 shadow-card sm:p-10">
            {/* Soft accent glow */}
            <div
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-electric/20 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet/30 blur-3xl"
              aria-hidden
            />
            {/* Dot texture for depth */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
                backgroundSize: "30px 30px",
              }}
              aria-hidden
            />

            <RevealGroup className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={(i % 3) * 0.08}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hov:-translate-y-1 hov:border-electric-light/50 hov:bg-white/[0.1]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/20 text-electric-light ring-1 ring-white/10 transition-colors group-hov:bg-electric group-hov:text-white">
                      <v.icon size={22} />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-white">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
