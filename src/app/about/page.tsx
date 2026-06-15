import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet AAStack, a team passionate about building great digital products with AI, modern web & mobile apps, and SEO that delivers real results.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About AAStack Solutions"
        title={
          <>
            We build <span className="text-accent">growth</span>, not just
            products
          </>
        }
        subtitle="A team that combines technical expertise with a relentless focus on real, measurable results for your business."
      />
      <About />
      <Testimonials />
      <CTABand />
    </main>
  );
}
