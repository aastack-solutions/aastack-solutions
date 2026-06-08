import Reveal from "./Reveal";

const PROJECTS = [
  {
    name: "SmartChat AI",
    desc: "AI chatbot that automated 70% of customer support",
    tag: "AI",
  },
  {
    name: "ShopFlow",
    desc: "E-commerce store that boosted sales by 40%",
    tag: "Web",
  },
  {
    name: "FitTrack App",
    desc: "Mobile fitness app with 10k+ downloads",
    tag: "Mobile",
  },
  {
    name: "RankBoost",
    desc: "SEO campaign: page 3 to #1 on Google",
    tag: "SEO",
  },
  {
    name: "AutoDesk AI",
    desc: "AI agent for document processing",
    tag: "AI",
  },
  {
    name: "BizPortal",
    desc: "Custom business dashboard & web app",
    tag: "Web",
  },
];

const TAG_STYLES: Record<string, string> = {
  AI: "bg-electric/15 text-electric-light ring-electric/30",
  Web: "bg-violet/15 text-violet-light ring-violet/30",
  Mobile: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
  SEO: "bg-amber-500/15 text-amber-300 ring-amber-400/30",
};

// Decorative gradient per card for a clean visual mockup feel
const GRADIENTS = [
  "from-electric to-violet",
  "from-violet to-electric",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-electric-light to-cyan",
  "from-violet-light to-electric",
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-light">
            Our Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Work That Speaks for Itself
          </h2>
          <p className="mt-4 text-lg text-white/55">
            Every project AAStack delivers is built to perform, scale, and
            impress.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.1}>
              <article className="group glass h-full overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-glow">
                <div
                  className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${GRADIENTS[i]} overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "20px 20px",
                    }}
                    aria-hidden
                  />
                  <span className="relative font-display text-3xl font-bold text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
                    {p.name}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {p.name}
                    </h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${TAG_STYLES[p.tag]}`}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {p.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
