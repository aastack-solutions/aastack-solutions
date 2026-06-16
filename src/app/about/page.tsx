import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import heroImg from "../../../public/images/hero.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet AAStack, a team passionate about building great digital products with AI, modern web & mobile apps, and SEO that delivers real results.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About AAStack Solutions"
        image={heroImg}
        title={
          <>
            Who We{" "}
            <span className="bg-gradient-to-r from-electric-light via-cyan to-electric-light bg-clip-text text-transparent">
              Are
            </span>
          </>
        }
        subtitle="A team that combines technical expertise with a relentless focus on real, measurable results for your business."
      >
        <Link
          href="/services"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:bg-electric/90"
        >
          Explore our services
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </PageHero>
      <About />
      <CoreValues />
      <TechStack />
      <Testimonials />
      <CTABand />
    </main>
  );
}
