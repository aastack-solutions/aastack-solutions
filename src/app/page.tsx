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

export default function Home() {
  return (
    <main>
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
