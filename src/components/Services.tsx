import { Bot, Code2, TrendingUp, Workflow, Check } from "lucide-react";
import Reveal, { RevealGroup } from "./Reveal";
import ChatbotLottie from "./ChatbotLottie";

const SERVICES = [
  {
    icon: Code2,
    title: "Web & App Development",
    tagline: "Custom-built products engineered to perform.",
    points: [
      "Website development",
      "Mobile app development",
      "Software development",
      "Shopify store creation",
      "RAG pipelines",
      "Machine learning solutions",
    ],
  },
  {
    icon: Bot,
    title: "Chatbots & Bots",
    tagline: "Always-on assistants across every channel.",
    points: [
      "Website chatbot",
      "WhatsApp chatbot",
      "Telegram bot",
      "Line app chatbot",
    ],
  },
  {
    icon: Workflow,
    title: "AI Automation",
    tagline: "Put the repetitive work on autopilot.",
    points: [
      "Workflow automation",
      "Social media automation",
      "Instagram reels & messages automation",
      "YouTube video generation & posting",
      "LinkedIn posting automation",
      "Shopify order tracking automation",
      "Content creation automation",
    ],
  },
  {
    icon: TrendingUp,
    title: "SEO, Ads & Marketing",
    tagline: "Get found and convert the right audience.",
    points: [
      "SEO optimization",
      "On-page & website SEO",
      "Off-page SEO",
      "Link building",
      "Guest posting",
      "Google Business Profile management",
      "Google Ads",
      "Meta Ads",
      "TikTok Ads",
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
              Everything we do to drive your growth
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

        <RevealGroup className="mt-12 grid gap-6 sm:mt-16 sm:gap-7 lg:grid-cols-2">
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

                <div className="mt-6 flex items-center gap-3">
                  <h3 className="font-display text-xl font-bold tracking-tight text-navy">
                    {s.title}
                  </h3>
                  <span className="rounded-full bg-electric/10 px-2.5 py-0.5 text-xs font-semibold text-electric">
                    {s.points.length} services
                  </span>
                </div>
                <p className="mt-2 text-navy/55">{s.tagline}</p>

                <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-navy/[0.07] pt-6 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-[0.95rem] text-navy/75"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric transition-colors duration-300 group-hov:bg-electric group-hov:text-white">
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
