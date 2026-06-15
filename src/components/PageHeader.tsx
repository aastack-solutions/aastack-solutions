import type { ReactNode } from "react";
import Reveal from "./Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-6 sm:pt-40 sm:pb-10">
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy/60">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
