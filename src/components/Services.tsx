import { Bot, Code2, TrendingUp, Check } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Bot,
    title: "AI Engineering",
    tagline: "Automate your business with AI that works.",
    points: [
      "Custom AI chatbots & assistants",
      "AI agents for task automation",
      "Document & data processing with AI",
      "Integration with your existing tools",
    ],
  },
  {
    icon: Code2,
    title: "Web & App Development",
    tagline: "Websites and apps that look great and perform even better.",
    points: [
      "Business & portfolio websites",
      "Web applications (dashboards, portals)",
      "Mobile apps (Android & iOS)",
      "E-commerce stores",
    ],
  },
  {
    icon: TrendingUp,
    title: "SEO",
    tagline: "Get found by the people searching for you.",
    points: [
      "Keyword research & strategy",
      "On-page & technical SEO",
      "Content optimization",
      "Monthly performance reports",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-light">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Three ways we drive your growth
          </h2>
          <p className="mt-4 text-lg text-white/55">
            From intelligent automation to pixel-perfect products and rankings
            that convert — all under one roof.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <article className="group glass relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-glow">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-electric/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                  aria-hidden
                />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-violet text-white shadow-glow">
                  <s.icon size={26} />
                </div>
                <h3 className="relative mt-6 font-display text-xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-white/55">{s.tagline}</p>
                <ul className="relative mt-5 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-white/75">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-electric-light"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
