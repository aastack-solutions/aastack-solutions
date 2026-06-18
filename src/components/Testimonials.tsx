import Image from "next/image";
import { Quote, User } from "lucide-react";
import Reveal, { RevealGroup } from "./Reveal";
import bgImg from "../../public/images/testimonials.jpg";

const TESTIMONIALS = [
  {
    quote:
      "AAStack delivered exactly what they promised, on time and beyond expectations. Our support load dropped overnight.",
    name: "Adnan Sheikh",
    company: "SaaS Startup",
  },
  {
    quote:
      "The new site is fast, beautiful, and converting. Communication was clear and the turnaround was impressive.",
    name: "Daniel Carter",
    company: "Ecommerce Brand",
  },
  {
    quote:
      "We finally rank on page one. The SEO work paid for itself in new leads within a couple of months.",
    name: "Bilal Ahmed",
    company: "Local Business",
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20">
      {/* Background photo, full-bleed band */}
      <Image
        src={bgImg}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        aria-hidden
        className="absolute inset-0 -z-20 object-cover"
      />
      {/* Dark navy overlay so the cards and text stay readable */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,20,50,0.72) 0%, rgba(9,24,60,0.66) 48%, rgba(6,16,40,0.78) 100%)",
        }}
        aria-hidden
      />
      {/* Soft top glow */}
      <div
        className="absolute -top-24 left-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-electric/25 blur-[120px]"
        aria-hidden
      />
      {/* Faint geometric texture for depth */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-electric-light">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our work through the{" "}
            <span className="bg-gradient-to-r from-electric-light via-cyan to-electric-light bg-clip-text text-transparent">
              lens of our clients
            </span>
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="group relative flex h-full flex-col rounded-2xl border border-cyan/25 bg-white/[0.04] p-7 shadow-[0_0_0_1px_rgba(14,165,224,0.08),0_24px_60px_-30px_rgba(14,165,224,0.5)] backdrop-blur-sm transition-all duration-300 hov:-translate-y-1 hov:border-cyan/50 hov:bg-white/[0.06]">
                <Quote className="text-electric-light/40" size={32} />
                <blockquote className="mt-4 flex-1 leading-relaxed text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-white/10 pt-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-electric/15 text-electric-light ring-2 ring-cyan/40 shadow-[0_0_20px_-4px_rgba(14,165,224,0.6)]">
                    <User size={22} />
                  </span>
                  <span>
                    <p className="font-display font-semibold text-electric-light">
                      {t.name}
                    </p>
                    <p className="text-sm italic text-white/55">{t.company}</p>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
