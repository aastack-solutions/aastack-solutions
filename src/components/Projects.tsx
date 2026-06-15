"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./Button";

type Project = {
  name: string;
  domain: string;
  category: string;
  tag: string;
  metric: { value: string; label: string };
  desc: string;
  image: string;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    name: "NovaAssist",
    domain: "novaassist.ai",
    category: "AI Chatbot",
    tag: "AI",
    metric: { value: "24/7", label: "Instant replies" },
    desc: "A demo AI assistant that understands customer questions in plain language and answers them instantly, around the clock. It handles FAQs, books appointments, and hands tricky chats to a human, all from one tidy chat window.",
    image: "/images/demo-chatbot.svg",
    accent: "text-electric",
  },
  {
    name: "Lumen Studio",
    domain: "lumenstudio.app",
    category: "Web Development",
    tag: "Web",
    metric: { value: "98", label: "Performance score" },
    desc: "A demo SaaS dashboard built for speed and clarity, with live analytics, clean data cards, and a responsive layout that feels effortless on any screen. A sample of how we turn complex data into simple decisions.",
    image: "/images/demo-web.svg",
    accent: "text-violet",
  },
  {
    name: "PulseFit",
    domain: "pulsefit.app",
    category: "Mobile App",
    tag: "Mobile",
    metric: { value: "4.9", label: "Sample rating" },
    desc: "A demo mobile experience with goal tracking, daily streaks, and smart reminders, wrapped in a smooth, modern interface. Built to show how an app can keep users coming back, day after day.",
    image: "/images/demo-app.svg",
    accent: "text-cyan",
  },
  {
    name: "PeakRank",
    domain: "peakrank.io",
    category: "SEO",
    tag: "SEO",
    metric: { value: "#1", label: "Sample ranking" },
    desc: "A demo SEO campaign view: keyword tracking, rising traffic, and a climb from invisible to the top of the results. A snapshot of how we help businesses get found by the right people.",
    image: "/images/demo-seo.svg",
    accent: "text-electric",
  },
];

const TAG_STYLES: Record<string, string> = {
  AI: "bg-electric/15 text-electric ring-electric/30",
  Web: "bg-violet/15 text-violet ring-violet/30",
  Mobile: "bg-cyan/15 text-cyan ring-cyan/30",
  SEO: "bg-amber-500/15 text-amber-600 ring-amber-400/30",
};

const AUTOPLAY_MS = 6500;

const slide = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 70 : -70 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -70 : 70 }),
};

export default function Projects() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const count = PROJECTS.length;
  const project = PROJECTS[index];

  const paginate = useCallback(
    (step: number) => setState(([i]) => [(i + step + count) % count, step]),
    [count]
  );
  const goTo = useCallback(
    (next: number) => setState(([i]) => [next, next > i ? 1 : -1]),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, paginate, index]);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Centered heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            Our Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Our <span className="text-accent">Impactful Projects</span>
          </h2>
          <p className="mt-4 text-lg text-navy/55">
            A look at the kind of digital products we build, demo previews of AI,
            web, mobile, and SEO work designed to drive real growth.
          </p>
        </Reveal>

        {/* Slider */}
        <Reveal delay={0.1} className="mt-14">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-navy/10 bg-white/70 shadow-card backdrop-blur-sm"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            {/* soft brand glow */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-electric/10 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-violet/10 blur-3xl" aria-hidden />

            <div className="relative p-6 sm:p-10 lg:p-12">
              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.div
                  key={index}
                  custom={dir}
                  variants={slide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Details (left) */}
                  <div className="order-2 lg:order-1">
                    <span className="inline-flex items-center rounded-full bg-electric/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-electric ring-1 ring-electric/20">
                      {project.category}
                    </span>
                    <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-5 max-w-xl leading-relaxed text-navy/60">
                      {project.desc}
                    </p>

                    <div className="mt-7 inline-flex items-baseline gap-2.5 rounded-2xl border border-navy/10 bg-navy/[0.025] px-5 py-3">
                      <span className={`font-display text-3xl font-extrabold ${project.accent}`}>
                        {project.metric.value}
                      </span>
                      <span className="text-sm font-medium text-navy/55">
                        {project.metric.label}
                      </span>
                    </div>

                    <div className="mt-9">
                      <Button href="/work" variant="primary" size="lg">
                        View Portfolio
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Button>
                    </div>
                  </div>

                  {/* Demo mockup (right) */}
                  <div className="order-1 lg:order-2">
                    <BrowserMockup project={project} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls: arrow · dots · arrow */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous project"
              onClick={() => paginate(-1)}
            >
              <ArrowLeft size={20} />
            </Button>

            <div className="flex items-center gap-2.5">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  aria-label={`Go to ${p.name}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-electric" : "w-2 bg-navy/20 hover:bg-navy/40"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              aria-label="Next project"
              onClick={() => paginate(1)}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BrowserMockup({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
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
          className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider ring-1 ring-inset ${TAG_STYLES[project.tag]}`}
        >
          {project.tag}
        </span>
      </div>

      {/* Demo screenshot */}
      <div className="relative aspect-[1000/640] w-full overflow-hidden bg-ink">
        <Image
          src={project.image}
          alt={`${project.name} demo preview`}
          fill
          unoptimized
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}
