import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "A look at real products AAStack has designed, built, and shipped, including AI tools, web apps, mobile apps, and SEO campaigns built to perform and scale.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Work"
        title={
          <>
            Work that <span className="text-accent">speaks for itself</span>
          </>
        }
        subtitle="Every project we deliver is built to perform, scale, and impress. Here's a snapshot of what we've shipped."
      />
      <Projects />
      <CTABand
        title="Want results like these?"
        subtitle="Let's talk about your project and how we can help you launch faster."
      />
    </main>
  );
}
