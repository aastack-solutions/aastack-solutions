import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: StaticImageData;
  /** Descriptive alt text for the banner photo (improves image SEO). */
  imageAlt: string;
  /** Optional content rendered under the subtitle (e.g. buttons). */
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  children,
}: PageHeroProps) {
  return (
    <section>
      {/* Spacer so the banner starts below the fixed navbar (matches its height) */}
      <div className="h-20 lg:h-24" aria-hidden />

      {/* Full-bleed dark banner, like the home hero */}
      <div className="relative isolate flex min-h-[60vh] items-center overflow-hidden">
        {/* Background image with a slow ambient zoom, like the home hero */}
        <div className="anim-hero-in absolute inset-0 -z-10">
          <div className="anim-ambient-zoom absolute inset-0">
            <Image
              src={image}
              alt={imageAlt}
              title={imageAlt}
              placeholder="blur"
              priority
              sizes="100vw"
              className="object-cover"
              fill
            />
          </div>
        </div>

        {/* Blackish overlay: light enough to keep the photo visible */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(4,8,18,0.72) 0%, rgba(4,8,18,0.58) 45%, rgba(4,8,18,0.88) 100%)",
          }}
          aria-hidden
        />
        {/* Subtle dot texture for depth */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-electric-light sm:text-sm">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
                {subtitle}
              </p>
            )}
            {children && <div className="mt-9">{children}</div>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
