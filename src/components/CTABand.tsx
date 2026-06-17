import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./Button";
import { CALENDLY_URL } from "@/data/site";

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
          <div className="rounded-3xl border border-electric/15 bg-electric/[0.05] px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-navy/65">
              {subtitle}
            </p>
            <Button href={CALENDLY_URL} variant="primary" size="lg" className="mt-8">
              Get a free consultation
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hov:translate-x-1"
              />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
