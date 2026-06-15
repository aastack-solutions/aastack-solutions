import Link from "next/link";
import { Layers, FolderGit2, LineChart, Users, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  {
    href: "/services",
    icon: Layers,
    eyebrow: "What we do",
    title: "Services",
    desc: "AI engineering, modern web & mobile apps, and SEO that drives real traffic.",
  },
  {
    href: "/work",
    icon: FolderGit2,
    eyebrow: "Our work",
    title: "Projects",
    desc: "A look at real products we've designed, built, and shipped to scale.",
  },
  {
    href: "/case-studies",
    icon: LineChart,
    eyebrow: "Proof",
    title: "Case Studies",
    desc: "From the first problem to a measurable result. See the impact we deliver.",
  },
  {
    href: "/about",
    icon: Users,
    eyebrow: "Who we are",
    title: "About",
    desc: "The team behind AAStack and the way we partner with you to win.",
  },
];

export default function ExploreTeasers() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            Explore
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Everything you need, one click away
          </h2>
          <p className="mt-4 text-lg text-navy/55">
            Dive deeper into what we offer and the results we deliver.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {ITEMS.map((it, i) => (
            <Reveal key={it.href} delay={(i % 2) * 0.1}>
              <Link
                href={it.href}
                className="group card relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-card-hover"
              >
                <div className="relative flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric text-white shadow-soft">
                    <it.icon size={26} />
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="text-navy/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric"
                  />
                </div>
                <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-electric">
                  {it.eyebrow}
                </p>
                <h3 className="relative mt-1 font-display text-2xl font-bold text-navy">
                  {it.title}
                </h3>
                <p className="relative mt-2 text-navy/60">{it.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
