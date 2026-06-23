import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, pageMetadata } from "@/data/seo";
import heroImg from "../../../public/images/about-team.webp";

export const metadata: Metadata = pageMetadata({
  title: "About AAStack Solutions | AI & Web Development Team — Pakistan",
  description:
    "Meet AAStack Solutions — a digital product studio in Pakistan delivering high-quality web apps, mobile apps, AI automation, and SEO with a focus on real, measurable results.",
  keywords: [
    "about AAStack",
    "web development team Pakistan",
    "AI automation team",
    "digital product studio Karachi",
    "software agency Pakistan",
  ],
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={organizationSchema} />
      <PageHero
        eyebrow="About AAStack Solutions"
        image={heroImg}
        imageAlt="AAStack Solutions team working on web and AI projects"
        title={
          <>
            Who we are at{" "}
            <span className="bg-gradient-to-r from-electric-light via-cyan to-electric-light bg-clip-text text-transparent">
              AAStack Solutions
            </span>
          </>
        }
        subtitle="A team that combines technical expertise with a relentless focus on real, measurable results for your business."
      >
        <Link
          href="/services"
          className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-electric to-violet px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_28px_-10px_var(--color-electric)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_var(--color-electric)]"
        >
          Explore our services
          <ArrowRight
            size={18}
            className="transition-transform group-hov:translate-x-1"
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
