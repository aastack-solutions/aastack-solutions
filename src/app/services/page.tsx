import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI engineering, modern web & mobile app development, and SEO that drives real traffic — all under one roof at AAStack.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Services"
        title={
          <>
            Build smarter with{" "}
            <span className="text-gradient">AAStack Solutions</span>
          </>
        }
        subtitle="From intelligent automation to pixel-perfect products and rankings that convert — here's how we drive your growth."
      />
      <Services />
      <Process />
      <CTABand
        title="Have a project in mind?"
        subtitle="Tell us what you're building and we'll map out the right approach — free of charge."
      />
    </main>
  );
}
