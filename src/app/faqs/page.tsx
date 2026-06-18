import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import { FAQS } from "@/data/faqs";
import CTABand from "@/components/CTABand";
import { CALENDLY_URL } from "@/data/site";
import heroImg from "../../../public/images/faqs-hero.jpg";

// Structured data so search engines can show these as rich FAQ results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to the most common questions about working with AAStack, pricing, timelines, AI, SEO, and ongoing support.",
};

export default function FAQsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="Frequently Asked Questions"
        image={heroImg}
        title={
          <>
            Questions?{" "}
            <span className="bg-gradient-to-r from-electric-light via-cyan to-electric-light bg-clip-text text-transparent">
              Answered.
            </span>
          </>
        }
        subtitle="Everything you need to know before we get started, from pricing and timelines to AI, SEO, and what happens after launch."
      >
        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-electric to-violet px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_28px_-10px_var(--color-electric)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_var(--color-electric)]"
        >
          Still have questions? Talk to us
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </PageHero>
      <FAQ />
      <CTABand />
    </main>
  );
}
