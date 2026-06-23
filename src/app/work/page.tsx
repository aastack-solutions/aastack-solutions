import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Projects from "@/components/Projects";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import { CALENDLY_URL } from "@/data/site";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/data/seo";
import heroImg from "../../../public/images/hero.webp";

export const metadata: Metadata = pageMetadata({
  title: "Our Work | Web & AI Projects Portfolio — AAStack Solutions",
  description:
    "Browse AAStack's portfolio of delivered projects — custom websites, mobile apps, AI automation systems, and SEO campaigns built for startups and businesses.",
  keywords: [
    "AAStack portfolio",
    "web development projects",
    "AI automation projects",
    "mobile app portfolio Pakistan",
    "software agency work",
  ],
  path: "/work",
});

const workSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Work — AAStack Solutions Portfolio",
  description:
    "Delivered projects by AAStack Solutions — custom websites, mobile apps, AI automation systems, and SEO campaigns.",
  url: `${SITE_URL}/work`,
  isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  about: { "@type": "Organization", name: SITE_NAME },
};

export default function WorkPage() {
  return (
    <main>
      <JsonLd data={workSchema} />
      <PageHero
        eyebrow="Our Work"
        image={heroImg}
        imageAlt="AAStack Solutions portfolio of web, mobile app and AI automation projects"
        title={
          <>
            Work that{" "}
            <span className="bg-gradient-to-r from-electric-light via-cyan to-electric-light bg-clip-text text-transparent">
              speaks for itself
            </span>
          </>
        }
        subtitle="Every project we deliver is built to perform, scale, and impress. Here's a snapshot of what we've shipped."
      >
        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-electric to-violet px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_28px_-10px_var(--color-electric)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_var(--color-electric)]"
        >
          Start your project
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </PageHero>
      <Projects />
      <CTABand
        title="Want results like these?"
        subtitle="Let's talk about your project and how we can help you launch faster."
      />
    </main>
  );
}
