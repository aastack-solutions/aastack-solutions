import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Projects from "@/components/Projects";
import CTABand from "@/components/CTABand";
import { CALENDLY_URL } from "@/data/site";
import heroImg from "../../../public/images/hero.jpg";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "A look at real products AAStack has designed, built, and shipped, including AI tools, web apps, mobile apps, and SEO campaigns built to perform and scale.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Work"
        image={heroImg}
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
