import Image from "next/image";
import { Globe, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

type Project = {
  name: string;
  domain: string;
  category: string;
  tag: Tag;
  metric: { value: string; label: string };
  desc: string;
  image: string;
};

type Tag = "AI" | "Web" | "Mobile" | "SEO";

const PROJECTS: Project[] = [
  {
    name: "Drugstore Restaurant",
    domain: "drugstore-restaurant.com",
    category: "AI Chatbot",
    tag: "AI",
    metric: { value: "24/7", label: "Bookings & menu help" },
    desc: "A custom AI chatbot for their website that recommends dishes based on each guest's taste and dietary needs, and lets visitors reserve a table in just a few messages, fully automated, day and night.",
    image: "/images/demo-chatbot.svg",
  },
  {
    name: "Barham Dental",
    domain: "barhamdental.com",
    category: "Web Development",
    tag: "Web",
    metric: { value: "100", label: "Performance score" },
    desc: "Rebuilt the website with a clean, fast, mobile friendly interface, optimized it for SEO, and set it up on Google Search Console so it gets properly indexed and starts ranking in search.",
    image: "/images/demo-web.svg",
  },
  {
    name: "Carpool Pakistan",
    domain: "carpoolpakistan.app",
    category: "Mobile App",
    tag: "Mobile",
    metric: { value: "60%", label: "Lower cost per rider" },
    desc: "A carpooling platform that matches passengers traveling along the same route, so one trip can carry multiple riders and everyone shares the cost instead of paying for a full ride alone.",
    image: "/images/demo-app.svg",
  },
  {
    name: "Google Business Profile SEO",
    domain: "business.google.com",
    category: "Local SEO",
    tag: "SEO",
    metric: { value: "420%", label: "Profile growth" },
    desc: "Took over and optimized the Google Business Profile end to end, categories, posts, photos, reviews, and local keywords, to put it in front of the right local audience.",
    image: "/images/demo-seo.svg",
  },
  {
    name: "CityDental",
    domain: "citydental.com",
    category: "Web Development",
    tag: "Web",
    metric: { value: "24/7", label: "Online appointments" },
    desc: "Designed and built a modern website from scratch with a built-in appointment booking system, so patients can explore services and reserve a slot online anytime.",
    image: "/images/demo-web.svg",
  },
];

const TAG_STYLES: Record<
  Tag,
  { pill: string; bar: string; metric: string; chrome: string }
> = {
  AI: {
    pill: "bg-electric/10 text-electric ring-electric/20",
    bar: "from-electric to-cyan",
    metric: "text-electric",
    chrome: "bg-electric/15 text-electric ring-electric/30",
  },
  Web: {
    pill: "bg-violet/10 text-violet ring-violet/20",
    bar: "from-violet to-electric",
    metric: "text-violet",
    chrome: "bg-violet/15 text-violet ring-violet/30",
  },
  Mobile: {
    pill: "bg-cyan/10 text-cyan ring-cyan/20",
    bar: "from-cyan to-electric",
    metric: "text-cyan",
    chrome: "bg-cyan/15 text-cyan ring-cyan/30",
  },
  SEO: {
    pill: "bg-amber-500/10 text-amber-600 ring-amber-400/20",
    bar: "from-amber-400 to-amber-500",
    metric: "text-amber-600",
    chrome: "bg-amber-500/15 text-amber-600 ring-amber-400/30",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-7 sm:gap-8 lg:grid-cols-2">
          {PROJECTS.map((p, i) => {
            const s = TAG_STYLES[p.tag];
            return (
              <Reveal key={p.name} delay={(i % 2) * 0.1}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-surface shadow-card transition-all duration-300 hov:-translate-y-1.5 hov:border-electric/30 hov:shadow-card-hover">
                  {/* Accent bar that fills on hover */}
                  <span
                    className={`absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r ${s.bar} transition-transform duration-300 group-hov:scale-x-100`}
                    aria-hidden
                  />

                  {/* Browser-style preview */}
                  <BrowserMockup project={p} />

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2.5">
                      <span
                        className={`inline-flex max-w-full items-center truncate rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] ring-1 ring-inset sm:text-xs sm:tracking-[0.14em] ${s.pill}`}
                      >
                        {p.category}
                      </span>
                      <span className="inline-flex shrink-0 items-baseline gap-1.5 rounded-xl border border-navy/10 bg-navy/[0.025] px-3 py-1.5">
                        <span
                          className={`font-display text-lg font-extrabold ${s.metric}`}
                        >
                          {p.metric.value}
                        </span>
                        <span className="text-xs font-medium text-navy/50">
                          {p.metric.label}
                        </span>
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2.5">
                      <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
                        {p.name}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-navy/30 transition-all duration-300 group-hov:-translate-y-0.5 group-hov:translate-x-0.5 group-hov:text-electric"
                      />
                    </div>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm text-navy/45">
                      <Globe size={13} />
                      {p.domain}
                    </span>

                    <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-navy/60">
                      {p.desc}
                    </p>
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

function BrowserMockup({ project }: { project: Project }) {
  const s = TAG_STYLES[project.tag];
  return (
    <div className="relative overflow-hidden border-b border-navy/10 bg-white">
      {/* Top bar */}
      <div className="flex items-center gap-3 border-b border-navy/10 bg-navy/[0.025] px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        </span>
        <span className="mx-auto flex max-w-[60%] flex-1 items-center justify-center gap-2 truncate rounded-full bg-white px-3 py-1 text-xs font-medium text-navy/50 ring-1 ring-navy/10">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {project.domain}
        </span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider ring-1 ring-inset ${s.chrome}`}
        >
          {project.tag}
        </span>
      </div>

      {/* Demo screenshot */}
      <div className="relative aspect-[1000/560] w-full overflow-hidden bg-ink">
        <Image
          src={project.image}
          alt={`${project.name} demo preview`}
          fill
          unoptimized
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hov:scale-[1.04]"
        />
      </div>
    </div>
  );
}
