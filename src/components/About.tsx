import type { CSSProperties } from "react";
import {
  Target,
  ShieldCheck,
  Gauge,
  Handshake,
  Quote,
} from "lucide-react";
import Reveal, { RevealGroup } from "./Reveal";

// Each row scrolls horizontally in an infinite marquee. Rows alternate
// direction (left and right) for a lively, polished feel.
const SKILL_ROWS: string[][] = [
  [
    "Flutter",
    "Dart",
    "React Native",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "Nest.js",
    "Python",
    "Flask",
    "FastAPI",
  ],
  [
    "Java",
    "Spring Boot",
    "GraphQL",
    "REST APIs",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Pinecone",
    "pgvector",
    "SaaS Development",
    "Workflow Automation",
    "Shopify Development",
    "Shopify Automation",
  ],
  [
    "LLM Integrations",
    "AI Chatbots",
    "RAG Pipelines",
    "AI Automation",
    "AI Reviewer",
    "AI Evaluation",
    "n8n",
    "WhatsApp Bots",
    "Voice Bots",
    "Technical SEO",
    "SEO",
    "Google Search Console",
    "Google Business Profile",
  ],
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Quality without compromise",
    body: "Every build is crafted to a standard we'd put our own name on, clean code, thoughtful design, and no shortcuts.",
  },
  {
    icon: Gauge,
    title: "Results that matter",
    body: "We measure success in your outcomes, more bookings, better rankings, faster sites, not just delivered features.",
  },
  {
    icon: Handshake,
    title: "An honest partnership",
    body: "Clear communication and zero surprises, from kickoff to launch and well beyond go live.",
  },
];

const STATS = [
  { value: "5+", label: "Projects delivered" },
  { value: "100", label: "Top performance score" },
  { value: "24/7", label: "AI automation built" },
];

const PILL_ACCENTS = [
  {
    dot: "bg-electric",
    hover: "hover:border-electric/40 hover:bg-electric/[0.06] hover:text-electric",
  },
  {
    dot: "bg-violet",
    hover: "hover:border-violet/40 hover:bg-violet/[0.06] hover:text-violet",
  },
  {
    dot: "bg-cyan",
    hover: "hover:border-cyan/40 hover:bg-cyan/[0.06] hover:text-cyan",
  },
];

function SkillPill({ label, index }: { label: string; index: number }) {
  const accent = PILL_ACCENTS[index % PILL_ACCENTS.length];
  return (
    <span
      className={`mr-3 inline-flex shrink-0 items-center gap-2 rounded-full border border-navy/[0.07] bg-white/80 px-4 py-2.5 text-sm font-medium text-navy/80 shadow-soft backdrop-blur-sm transition-colors duration-300 ${accent.hover}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden />
      {label}
    </span>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration,
}: {
  items: string[];
  reverse?: boolean;
  duration: string;
}) {
  return (
    <div className="marquee-mask overflow-hidden py-1">
      <div className="marquee-group">
        <div
          className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}
          style={{ "--marquee-duration": duration } as CSSProperties}
        >
          {[...items, ...items].map((s, i) => (
            <SkillPill key={`${s}-${i}`} label={s} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="overflow-x-clip py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Intro */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            About AAStack
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Building great digital products
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/60">
            We&apos;re AAStack, a team passionate about helping businesses grow
            with technology, from AI assistants and powerful websites to mobile
            apps and better search rankings, combining technical expertise with
            a focus on real, measurable results.
          </p>
        </Reveal>

        {/* Stats */}
        <Reveal delay={0.05} className="mt-12">
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`card rounded-2xl p-6 text-center sm:p-6 ${
                  i === STATS.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <dt className="font-display text-3xl font-extrabold text-electric sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-xs font-medium leading-tight text-navy/55 sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Values */}
        <div className="mt-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h3 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              What drives us
            </h3>
            <p className="mt-3 text-navy/55">
              The principles behind every project we take on.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group card h-full rounded-2xl p-6 transition-all duration-300 hov:-translate-y-1 hov:border-electric/40 hov:shadow-card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric ring-1 ring-navy/[0.06] transition-colors group-hov:bg-electric group-hov:text-white">
                    <v.icon size={22} />
                  </span>
                  <h4 className="mt-5 font-display text-lg font-semibold text-navy">
                    {v.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>

        {/* Who we are */}
        <Reveal delay={0.05} className="mt-28 mb-16 sm:mt-32 sm:mb-20">
          <div className="relative">
            {/* Ambient accents */}
            <div
              className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-electric/12 to-transparent blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 -z-10 h-64 w-64 rounded-full bg-gradient-to-tr from-violet/10 to-transparent blur-3xl"
              aria-hidden
            />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
              {/* Identity */}
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-electric/[0.08] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric ring-1 ring-inset ring-electric/15">
                  Who we are
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl">
                  A digital product studio
                </h3>
                <p className="mt-4 leading-relaxed text-navy/60">
                  Engineering, design, and AI under one roof, focused on building
                  software that moves your business forward.
                </p>

                <div className="mt-7 flex items-start gap-3.5 rounded-2xl bg-gradient-to-br from-electric/[0.07] to-violet/[0.05] p-5 ring-1 ring-inset ring-electric/10">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-electric shadow-soft ring-1 ring-navy/[0.06]">
                    <Target size={18} />
                  </span>
                  <p className="text-sm leading-relaxed text-navy/70">
                    <span className="font-semibold text-navy">Our mission:</span>{" "}
                    to make advanced technology accessible and profitable for
                    every business.
                  </p>
                </div>
              </div>

              {/* Narrative */}
              <div className="lg:col-span-7 lg:border-l lg:border-navy/[0.08] lg:pl-14">
                <Quote
                  size={40}
                  className="text-electric/20"
                  aria-hidden
                  fill="currentColor"
                />
                <p className="mt-4 text-lg leading-relaxed text-navy/80 sm:text-xl">
                  AAStack is a team of developers and designers building fast,
                  clean, responsive web and mobile applications for businesses
                  that want to grow.
                </p>
                <p className="mt-4 leading-relaxed text-navy/60">
                  We pair modern engineering with thoughtful design, and
                  increasingly weave AI into our builds to automate the work that
                  used to eat up your team&apos;s time. Our approach is simple:
                  deliver high quality work, on time, that actually solves your
                  problem, and stay a reliable partner long after launch.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Technologies marquee */}
        <div className="mt-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h3 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Technologies we build with
            </h3>
            <p className="mt-3 text-navy/55">
              A modern stack spanning mobile, web, backend, databases, AI, and
              growth.
            </p>
          </Reveal>

        </div>

        {/* Full width marquee, breaks out to the container edges (no w-screen
            so it never overflows past the viewport / its scrollbar) */}
        <div className="mt-10 -mx-5 sm:-mx-8">
          <div className="space-y-3.5 sm:space-y-4">
            <MarqueeRow items={SKILL_ROWS[0]} duration="52s" />
            <MarqueeRow items={SKILL_ROWS[1]} reverse duration="46s" />
            <MarqueeRow items={SKILL_ROWS[2]} duration="58s" />
          </div>
        </div>
      </div>
    </section>
  );
}
