import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

type CTABandProps = {
  title?: string;
  subtitle?: string;
};

export default function CTABand({
  title = "Ready to build something great?",
  subtitle = "Tell us about your project and we'll get back to you within 24 hours.",
}: CTABandProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-12 text-center shadow-soft sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-electric/20 blur-3xl"
              aria-hidden
            />
            <h2 className="relative font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/65">
              {subtitle}
            </p>
            <Link
              href="/#contact"
              className="group relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:shadow-glow-violet hover:brightness-110"
            >
              Get a Free Consultation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
