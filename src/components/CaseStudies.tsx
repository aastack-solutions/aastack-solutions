import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const CASES = [
  {
    name: "SmartChat AI",
    tag: "AI",
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

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-light">
            Case Studies
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Problem → Solution → Result
          </h2>
        </Reveal>

        <div className="mt-14 space-y-8">
          {CASES.map((c, i) => (
            <Reveal key={c.name} delay={0.05}>
              <article className="glass overflow-hidden rounded-3xl">
                <div className="grid gap-px bg-white/5 lg:grid-cols-3">
                  <div className="bg-white/[0.05] p-7 text-white lg:p-8">
                    <span className="inline-flex rounded-full bg-electric/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-electric-light">
                      {c.tag}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold">
                      {c.name}
                    </h3>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-white/40">
                      The Challenge
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {c.challenge}
                    </p>
                  </div>

                  <div className="bg-white/[0.015] p-7 lg:p-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-electric-light">
                      What We Did
                    </p>
                    <p className="mt-2 leading-relaxed text-white/70">{c.did}</p>
                  </div>

                  <div className="bg-white/[0.03] p-7 lg:p-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-violet-light">
                      Results
                    </p>
                    <ul className="mt-3 space-y-3">
                      {c.results.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2.5 text-sm font-medium text-white/90"
                        >
                          <CheckCircle2
                            size={18}
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
          ))}
        </div>
      </div>
    </section>
  );
}
