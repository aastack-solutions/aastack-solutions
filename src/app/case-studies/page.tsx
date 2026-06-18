import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CaseStudies from "@/components/CaseStudies";
import CTABand from "@/components/CTABand";
import { CALENDLY_URL } from "@/data/site";
import heroImg from "../../../public/images/case-studies-hero.jpg";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real challenges, real solutions, real results. See how AAStack turned business problems into measurable wins with AI, web, and SEO.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        image={heroImg}
        title={
          <>
            From problem to{" "}
            <span className="bg-gradient-to-r from-electric-light via-cyan to-electric-light bg-clip-text text-transparent">
              measurable result
            </span>
          </>
        }
        subtitle="A closer look at the challenges our clients faced, what we built, and the measurable impact it delivered."
      >
        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-electric to-violet px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_28px_-10px_var(--color-electric)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_var(--color-electric)]"
        >
          Let's discuss your challenge
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </PageHero>
      <CaseStudies />
      <CTABand
        title="Let's write your success story"
        subtitle="Share your challenge and we'll show you exactly how we'd solve it."
      />
    </main>
  );
}
