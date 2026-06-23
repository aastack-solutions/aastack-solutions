import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { FAQS } from "@/data/faqs";
import CTABand from "@/components/CTABand";
import { CALENDLY_URL } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import heroImg from "../../../public/images/faqs-hero.webp";

// Structured data (built from the real FAQ content) so search engines can show
// these as rich FAQ results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const metadata: Metadata = pageMetadata({
  title: "FAQs | Common Questions About AAStack Services & Process",
  description:
    "Got questions? Find answers about AAStack's development process, timelines, pricing approach, technology stack, and how we work with clients worldwide.",
  keywords: [
    "AAStack FAQ",
    "web development questions",
    "how AI automation works",
    "software agency process",
    "hire developer Pakistan",
  ],
  path: "/faqs",
});

export default function FAQsPage() {
  return (
    <main>
      <JsonLd data={faqJsonLd} />
      <PageHero
        eyebrow="Frequently Asked Questions"
        image={heroImg}
        imageAlt="AAStack Solutions FAQs — answers about web development, AI automation and SEO"
        title={
          <>
            Frequently asked questions,{" "}
            <span className="bg-gradient-to-r from-electric-light via-cyan to-electric-light bg-clip-text text-transparent">
              answered
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
