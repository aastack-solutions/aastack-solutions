import {
  Check,
  Bot,
  Code2,
  TrendingUp,
  Car,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Reveal, { RevealGroup } from "./Reveal";
import { CALENDLY_URL } from "@/data/site";

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
    name: "Drugstore Restaurant",
    tag: "AI",
    metric: { value: "24/7", label: "Bookings & menu help" },
    challenge:
      "The restaurant relied on phone calls and walk ins for reservations. During busy hours, staff were tied up answering the same questions about the menu and table availability, and bookings were lost after closing time.",
    did: "Built a custom AI chatbot for their website that recommends dishes based on each guest's taste and dietary needs, and lets visitors reserve a table in just a few messages, fully automated, day and night.",
    results: [
      "Guests reserve a table without calling",
      "Personalized menu recommendations on demand",
      "Reservations captured 24/7, even after closing",
    ],
  },
  {
    name: "Barham Dental",
    tag: "Web",
    metric: { value: "100", label: "Performance score" },
    challenge:
      "The clinic had a dated website with a confusing interface and almost no digital visibility, patients simply couldn't find it on Google when searching for a dentist nearby.",
    did: "Rebuilt the website with a clean, fast, mobile friendly interface, optimized it for SEO, and set it up on Google Search Console so it gets properly indexed and starts ranking in search.",
    results: [
      "100/100 site performance score",
      "Now discoverable on Google search",
      "More patients finding the clinic online",
    ],
  },
  {
    name: "Carpool Pakistan",
    tag: "App",
    metric: { value: "60%", label: "Lower cost per rider" },
    challenge:
      "Solo rides on popular routes were expensive, and commuters heading the same way had no easy way to share a car and split the fare.",
    did: "Built a carpooling platform that matches passengers traveling along the same route, so one trip can carry multiple riders and everyone shares the cost instead of paying for a full ride alone.",
    results: [
      "Multiple passengers matched per route",
      "Fares split across riders",
      "Lower cost for every commuter",
    ],
  },
  {
    name: "Google Business Profile SEO",
    tag: "SEO",
    metric: { value: "420%", label: "Profile growth" },
    challenge:
      "A local business's Google Business Profile was underused and barely visible, so it wasn't showing up when nearby customers searched for what they offered.",
    did: "Took over and optimized the Google Business Profile end to end, categories, posts, photos, reviews, and local keywords, to put it in front of the right local audience.",
    results: [
      "420% growth on the business profile",
      "Much higher visibility in local search",
      "More calls and visits from nearby customers",
    ],
  },
  {
    name: "CityDental",
    tag: "Web",
    metric: { value: "24/7", label: "Online appointments" },
    challenge:
      "The dental clinic had no website at all, so prospective patients couldn't find information or book online, every single appointment had to go through a phone call.",
    did: "Designed and built a modern website from scratch with a built-in appointment booking system, so patients can explore services and reserve a slot online anytime.",
    results: [
      "First ever website for the clinic",
      "Patients book appointments online 24/7",
      "Fewer missed calls and manual scheduling",
    ],
  },
];

type TagStyle = { icon: LucideIcon; chip: string; accent: string };

const TAG_META: Record<string, TagStyle> = {
  AI: { icon: Bot, chip: "bg-electric/10 text-electric", accent: "text-electric" },
  Web: { icon: Code2, chip: "bg-violet/10 text-violet", accent: "text-violet" },
  App: { icon: Car, chip: "bg-cyan/10 text-cyan", accent: "text-cyan" },
  SEO: {
    icon: TrendingUp,
    chip: "bg-amber-500/10 text-amber-600",
    accent: "text-amber-600",
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

        <RevealGroup className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-2">
          {CASES.map((c, i) => {
            const meta = TAG_META[c.tag];
            const Icon = meta.icon;
            return (
              <Reveal key={c.name} delay={(i % 2) * 0.08}>
                <article className="group card flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hov:-translate-y-1 hov:border-navy/15 hov:shadow-card-hover sm:p-8">
                  {/* Header: identity + metric */}
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl sm:h-12 sm:w-12 ${meta.chip}`}
                      >
                        <Icon size={22} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-base font-bold leading-tight tracking-tight text-navy break-words sm:text-xl">
                          {c.name}
                        </h3>
                        <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-navy/40 sm:text-xs">
                          {c.tag} · Case {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <p
                        className={`font-display text-2xl font-extrabold leading-none sm:text-4xl ${meta.accent}`}
                      >
                        {c.metric.value}
                      </p>
                      <p className="mt-1.5 max-w-[5.5rem] text-[0.7rem] font-medium leading-tight text-navy/45 sm:max-w-none">
                        {c.metric.label}
                      </p>
                    </div>
                  </div>

                  <div className="my-6 hairline" />

                  {/* Narrative */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-[0.7rem] font-bold uppercase tracking-wider text-navy/35">
                        Challenge
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy/65">
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <p
                        className={`text-[0.7rem] font-bold uppercase tracking-wider ${meta.accent}`}
                      >
                        What we did
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy/65">
                        {c.did}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-navy/[0.07] pt-5">
                    {c.results.map((r) => (
                      <li
                        key={r}
                        className="inline-flex items-center gap-1.5 rounded-full bg-navy/[0.035] px-3 py-1.5 text-xs font-medium text-navy/75 ring-1 ring-inset ring-navy/[0.06]"
                      >
                        <Check size={12} strokeWidth={3} className="text-electric" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}

          {/* Closing call to action tile */}
          <Reveal delay={0.08} className="lg:col-span-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-between gap-4 rounded-3xl border border-dashed border-navy/15 bg-navy/[0.015] p-7 text-center transition-colors hov:border-electric/40 hov:bg-electric/[0.03] sm:flex-row sm:text-left"
            >
              <p className="font-display text-lg font-semibold text-navy">
                Your business could be the next success story.
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-2xl bg-electric px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform group-hov:translate-x-0.5">
                Start your project
                <ArrowUpRight size={16} />
              </span>
            </a>
          </Reveal>
        </RevealGroup>
      </div>
    </section>
  );
}
