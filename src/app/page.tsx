import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import WhyChoose from "@/components/WhyChoose";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroStats />
      <WhyChoose />
      <Problems />
      <Services />
      <Projects />
      <CaseStudies />
      <Industries />
      <About />
      <Testimonials />
      <FAQ />
      <CTABand />
      <Contact />
    </main>
  );
}
