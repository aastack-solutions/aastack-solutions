import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Problems from "@/components/Problems";
import Industries from "@/components/Industries";
import ExploreTeasers from "@/components/ExploreTeasers";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChoose />
      <Problems />
      <Industries />
      <ExploreTeasers />
      <FAQ />
      <Contact />
    </main>
  );
}
