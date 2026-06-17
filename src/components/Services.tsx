import { Bot, Code2, TrendingUp, Check } from "lucide-react";
import Reveal, { RevealGroup } from "./Reveal";
import ChatbotLottie from "./ChatbotLottie";

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
    tagline: "Software that looks great and performs even better.",
    points: [
      "Business & portfolio websites",
      "Web applications, dashboards & portals",
      "Mobile apps for Android & iOS",
      "Ecommerce stores that convert",
    ],
  },
  {
    icon: TrendingUp,
    title: "SEO",
    tagline: "Get found by the people already searching for you.",
    points: [
      "Keyword research & strategy",
      "On page & technical SEO",
      "Content optimization",
      "Monthly performance reports",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
              What We Do
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Three ways we drive your growth
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/55">
              From intelligent automation to pixel perfect products and rankings
              that convert, all under one roof. One team, accountable end to end.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex items-center justify-center">
              {/* Soft accent glow behind the animation */}
              <div
                className="absolute -z-10 h-3/4 w-3/4 rounded-full bg-gradient-to-tr from-electric/15 via-cyan/10 to-transparent blur-3xl"
                aria-hidden
              />
              {/* Live AI chatbot animation */}
              <ChatbotLottie className="w-[80%] max-w-md" />
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <article className="group card relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-all duration-300 hov:-translate-y-1.5 hov:border-electric/40 hov:shadow-card-hover">
                {/* Accent bar that fills on hover */}
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-electric to-cyan transition-transform duration-300 group-hov:scale-x-100"
                  aria-hidden
                />

                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-electric ring-1 ring-navy/[0.06] transition-colors duration-300 group-hov:bg-electric group-hov:text-white">
                    <s.icon size={26} />
                  </span>
                  <span className="font-display text-4xl font-bold tabular-nums text-navy/[0.08] transition-colors duration-300 group-hov:text-electric/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-navy/55">{s.tagline}</p>

                <ul className="mt-6 space-y-3 border-t border-navy/[0.07] pt-6">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-[0.95rem] text-navy/75"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
