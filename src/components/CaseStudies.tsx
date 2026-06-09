import {
  CheckCircle2,
  Bot,
  Code2,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

type CaseStudy = {
  name: string;
  tag: string;
  metric: { value: string; label: string };
  challenge: string;
  did: string;
  results: string[];
};

const CASES: CaseStudy[] = [
  {
    name: "SmartChat AI",
    tag: "AI",
    metric: { value: "70%", label: "Queries automated" },
    challenge:
      "A growing business was overwhelmed with repetitive customer queries, causing slow response times and frustrated customers.",
    did: "Built a custom AI chatbot integrated with their website that answered customer questions instantly, 24/7.",
    results: [
      "70% of queries handled automatically",
      "Response time reduced from hours to seconds",
      "Customer satisfaction up significantly",
    ],
  },
  {
    name: "ShopFlow",
    tag: "Web",
    metric: { value: "+40%", label: "Sales growth" },
    challenge:
      "An online store had an outdated, slow website and was losing sales due to poor user experience.",
    did: "Redesigned the store with a fast, modern, mobile-friendly interface and a smooth checkout flow.",
    results: [
      "Sales increased by 40%",
      "Page load time cut by 60%",
      "Lower cart abandonment rate",
    ],
  },
  {
    name: "RankBoost",
    tag: "SEO",
    metric: { value: "200%", label: "Traffic growth" },
    challenge:
      "A local business was invisible on Google, stuck on page 3 with almost no organic traffic.",
    did: "Ran keyword research, fixed technical SEO, and optimized content for their target audience.",
    results: [
      "Ranked #1 on Google for key terms",
      "Organic traffic grew by 200%",
      "More leads and calls every week",
    ],
  },
];

const TAG_META: Record<string, { icon: LucideIcon; chip: string; glow: string }> = {
  AI: {
    icon: Bot,
    chip: "bg-electric/15 text-electric-light ring-electric/30",
    glow: "from-electric/25",
  },
  Web: {
    icon: Code2,
    chip: "bg-violet/15 text-violet-light ring-violet/30",
    glow: "from-violet/25",
  },
  SEO: {
    icon: TrendingUp,
    chip: "bg-amber-500/15 text-amber-300 ring-amber-400/30",
    glow: "from-amber-500/25",
  },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-light">
            Case Studies
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Real problems, <span className="text-gradient">real results</span>
          </h2>
          <p className="mt-4 text-lg text-white/55">
            A closer look at the challenges we solved and the measurable impact
            we delivered.
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {CASES.map((c, i) => {
            const meta = TAG_META[c.tag];
            const Icon = meta.icon;
            return (
              <Reveal key={c.name} delay={0.05}>
                <article className="group glass relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:border-electric/30 sm:p-8">
                  {/* corner glow */}
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${meta.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                    aria-hidden
                  />

                  {/* Header */}
                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-violet text-white shadow-glow">
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="font-display text-xs font-bold text-white/35">
                            CASE {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider ring-1 ring-inset ${meta.chip}`}
                          >
                            {c.tag}
                          </span>
                        </div>
                        <h3 className="mt-1 font-display text-2xl font-bold text-white">
                          {c.name}
                        </h3>
                      </div>
                    </div>

                    {/* Headline metric */}
                    <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-center">
                      <p className="font-display text-3xl font-extrabold text-gradient sm:text-4xl">
                        {c.metric.value}
                      </p>
                      <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                        {c.metric.label}
                      </p>
                    </div>
                  </div>

                  <div className="hairline relative my-7" />

                  {/* Body: challenge / solution / results */}
                  <div className="relative grid gap-7 lg:grid-cols-3 lg:gap-8">
                    <div>
                      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/40">
                        <AlertCircle size={15} /> The Challenge
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/70">
                        {c.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-electric-light">
                        <Lightbulb size={15} /> What We Did
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/70">
                        {c.did}
                      </p>
                    </div>

                    <div>
                      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-violet-light">
                        <TrendingUp size={15} /> Results
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {c.results.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2.5 text-sm font-medium text-white/90"
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-0.5 shrink-0 text-electric-light"
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
