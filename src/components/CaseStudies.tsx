import {
  Check,
  Bot,
  Code2,
  TrendingUp,
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

const TAG_META: Record<string, { icon: LucideIcon; chip: string }> = {
  AI: {
    icon: Bot,
    chip: "bg-electric/10 text-electric ring-electric/20",
  },
  Web: {
    icon: Code2,
    chip: "bg-violet/10 text-violet ring-violet/20",
  },
  SEO: {
    icon: TrendingUp,
    chip: "bg-amber-500/10 text-amber-600 ring-amber-400/20",
  },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            Case Studies
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Real problems, <span className="text-accent">real results</span>
          </h2>
          <p className="mt-4 text-lg text-navy/55">
            A closer look at the challenges we solved and the measurable impact
            we delivered.
          </p>
        </Reveal>

        <div className="mt-14 space-y-6 sm:mt-16">
          {CASES.map((c, i) => {
            const meta = TAG_META[c.tag];
            const Icon = meta.icon;
            return (
              <Reveal key={c.name} delay={0.05}>
                <article className="group card grid gap-8 rounded-3xl p-7 transition-all duration-300 hover:border-electric/30 hover:shadow-card-hover sm:p-9 lg:grid-cols-12 lg:gap-10">
                  {/* Left: identity + headline metric */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-inset ${meta.chip}`}
                      >
                        <Icon size={13} />
                        {c.tag}
                      </span>
                      <span className="font-display text-xs font-bold text-navy/30">
                        CASE {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy">
                      {c.name}
                    </h3>

                    <div className="mt-6">
                      <p className="font-display text-5xl font-extrabold leading-none text-accent">
                        {c.metric.value}
                      </p>
                      <p className="mt-2 text-sm font-medium text-navy/50">
                        {c.metric.label}
                      </p>
                    </div>
                  </div>

                  {/* Right: narrative + results */}
                  <div className="lg:col-span-8 lg:border-l lg:border-navy/[0.08] lg:pl-10">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-navy/40">
                          Challenge
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-navy/65">
                          {c.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-electric">
                          What we did
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-navy/65">
                          {c.did}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-navy/[0.08] pt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy/40">
                        Results
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2.5">
                        {c.results.map((r) => (
                          <li
                            key={r}
                            className="flex items-center gap-2 text-sm font-medium text-navy/80"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric">
                              <Check size={12} strokeWidth={3} />
                            </span>
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
