import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CaseStudies from "@/components/CaseStudies";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import { CALENDLY_URL } from "@/data/site";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/data/seo";
import heroImg from "../../../public/images/case-studies-hero.webp";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies | Real Results from Web, AI & SEO Projects — AAStack",
  description:
    "See how AAStack Solutions turned real business problems into measurable results — from a 100/100 site to 24/7 AI booking and local SEO that gets clients found on Google.",
  keywords: [
    "web development case studies",
    "AI automation case study",
    "SEO results Pakistan",
    "chatbot case study",
    "software project results",
  ],
  path: "/case-studies",
});

// Built from the real case studies shown on the page.
const creator = { "@type": "Organization", name: SITE_NAME } as const;
const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AAStack Solutions Case Studies",
  description:
    "Real project results from AAStack Solutions — AI automation, web development, and SEO case studies.",
  url: `${SITE_URL}/case-studies`,
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "Drugstore Restaurant — 24/7 AI Booking & Menu Chatbot",
        description:
          "A custom AI chatbot that recommends dishes and lets guests reserve a table in a few messages, fully automated day and night.",
        keywords: "AI chatbot, restaurant automation, booking bot",
        creator,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "Barham Dental — 100/100 Performance & Google Ranking",
        description:
          "Rebuilt a fast, mobile-friendly, SEO-optimized website that now scores 100/100 and is discoverable on Google search.",
        keywords: "web development, technical SEO, performance",
        creator,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "Carpool Pakistan — 60% Lower Cost Per Rider",
        description:
          "A carpooling platform that matches passengers on the same route so trips are shared and fares are split across riders.",
        keywords: "mobile app development, marketplace, ride sharing",
        creator,
      },
    },
  ],
};

export default function CaseStudiesPage() {
  return (
    <main>
      <JsonLd data={caseStudiesSchema} />
      <PageHero
        eyebrow="Case Studies"
        image={heroImg}
        imageAlt="AAStack Solutions case studies — measurable results from web, AI and SEO projects"
        title={
          <>
            Case studies that{" "}
            <span className="bg-gradient-to-r from-electric-light via-cyan to-electric-light bg-clip-text text-transparent">
              drive real results
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
          Let&apos;s discuss your challenge
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
