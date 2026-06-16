import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "AAStack delivered exactly what they promised, on time and beyond expectations. Our support load dropped overnight.",
    name: "Sample Client",
    company: "SaaS Startup",
  },
  {
    quote:
      "The new site is fast, beautiful, and converting. Communication was clear and the turnaround was impressive.",
    name: "Sample Client",
    company: "Ecommerce Brand",
  },
  {
    quote:
      "We finally rank on page one. The SEO work paid for itself in new leads within a couple of months.",
    name: "Sample Client",
    company: "Local Business",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            What clients say
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="card flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-card-hover">
                <Quote className="text-electric/40" size={34} />
                <blockquote className="mt-4 flex-1 leading-relaxed text-navy/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-5">
                  <figcaption>
                    <p className="font-display font-semibold text-navy">
                      {t.name}
                    </p>
                    <p className="text-sm text-navy/55">{t.company}</p>
                  </figcaption>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        size={15}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
