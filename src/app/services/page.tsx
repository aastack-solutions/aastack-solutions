import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import { CALENDLY_URL } from "@/data/site";
import { pageMetadata, SITE_NAME } from "@/data/seo";
import heroImg from "../../../public/images/full-service-bg.webp";

export const metadata: Metadata = pageMetadata({
  title: "Our Services | Web Dev, AI Automation, Chatbots & SEO — AAStack",
  description:
    "AAStack offers web development, Flutter mobile apps, AI chatbots, WhatsApp bots, n8n workflow automation, RAG pipelines, and full SEO services for businesses worldwide.",
  keywords: [
    "web development services",
    "AI chatbot development",
    "n8n workflow automation",
    "Flutter app development",
    "SEO services Pakistan",
    "RAG pipeline development",
    "WhatsApp chatbot",
  ],
  path: "/services",
});

const provider = { "@type": "Organization", name: SITE_NAME } as const;

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web & App Development",
    provider,
    description:
      "Custom website development, mobile app development with Flutter, Shopify stores, software development, and RAG pipeline implementation.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web & App Development Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Store Creation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "RAG Pipeline Development" } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Automation",
    provider,
    description:
      "n8n workflow automation, social media automation, YouTube automation, LinkedIn automation, and AI-powered content creation automation.",
    areaServed: "Worldwide",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Chatbots & Voicebots",
    provider,
    description:
      "Website chatbots, WhatsApp chatbots, Telegram bots, and Line app chatbots for businesses.",
    areaServed: "Worldwide",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SEO & Digital Marketing",
    provider,
    description:
      "Technical SEO, on-page SEO, off-page SEO, link building, Google Ads, Meta Ads, TikTok Ads, and Google Business Profile management.",
    areaServed: "Worldwide",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={serviceSchemas} />
      <PageHero
        eyebrow="Our Services"
        image={heroImg}
        imageAlt="AAStack Solutions full-service digital agency — web, AI automation and SEO"
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
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-electric to-violet px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_28px_-10px_var(--color-electric)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_var(--color-electric)]"
        >
          Start a project
          <ArrowRight
            size={18}
            className="transition-transform group-hov:translate-x-1"
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
