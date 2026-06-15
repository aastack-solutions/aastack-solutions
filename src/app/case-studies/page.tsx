import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CaseStudies from "@/components/CaseStudies";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real challenges, real solutions, real results. See how AAStack turned business problems into measurable wins with AI, web, and SEO.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Case Studies"
        title={
          <>
            From problem to{" "}
            <span className="text-accent">measurable result</span>
          </>
        }
        subtitle="A closer look at the challenges our clients faced, what we built, and the measurable impact it delivered."
      />
      <CaseStudies />
      <CTABand
        title="Let's write your success story"
        subtitle="Share your challenge and we'll show you exactly how we'd solve it."
      />
    </main>
  );
}
