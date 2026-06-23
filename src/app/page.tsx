import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import WhyChoose from "@/components/WhyChoose";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata({
  title: "AAStack Solutions | Web Development, AI Automation & SEO — Karachi",
  description:
    "AAStack Solutions builds custom web apps, mobile apps, AI chatbots, n8n automation workflows, and SEO strategies that drive real business growth. Based in Pakistan.",
  keywords: [
    "web development Pakistan",
    "AI automation agency",
    "custom chatbot development",
    "n8n automation",
    "SEO agency Karachi",
    "mobile app development Pakistan",
    "AAStack Solutions",
  ],
  path: "/",
});

export default function Home() {
  return (
    <main>
      <JsonLd data={organizationSchema} />
      <Hero />
      <HeroStats />
      <WhyChoose />
      <Problems />
      <Services />
      <Industries />
      <About />
      <Testimonials />
      <CTABand />
      <Contact />
    </main>
  );
}
