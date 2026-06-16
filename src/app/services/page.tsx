import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTABand from "@/components/CTABand";
import heroImg from "../../../public/images/full-service-bg.jpg";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI engineering, modern web & mobile app development, and SEO that drives real traffic, all under one roof at AAStack.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        image={heroImg}
        title={
          <>
            Build smarter with{" "}
            <span className="bg-gradient-to-r from-electric-light via-cyan to-electric-light bg-clip-text text-transparent">
              AAStack Solutions
            </span>
          </>
        }
        subtitle="From intelligent automation to pixel perfect products and rankings that convert. Here's how we drive your growth."
      >
        <Link
          href="/#contact"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:bg-electric/90"
        >
          Start a project
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </PageHero>
      <Services />
      <Process />
      <CTABand
        title="Have a project in mind?"
        subtitle="Tell us what you're building and we'll map out the right approach, free of charge."
      />
    </main>
  );
}
