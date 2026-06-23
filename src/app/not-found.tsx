import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  // A 404 should never be indexed.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] flex-col items-center justify-center px-5 py-32 text-center">
      <p className="font-display text-7xl font-bold tracking-tight text-electric sm:text-8xl">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        This page took a wrong turn
      </h1>
      <p className="mx-auto mt-4 max-w-md leading-relaxed text-navy/60">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-electric to-violet px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_28px_-10px_var(--color-electric)] transition-all hover:-translate-y-0.5"
        >
          <Home size={18} />
          Back to home
        </Link>
        <Link
          href="/services"
          className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-navy/15 px-7 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-navy/[0.04]"
        >
          Explore our services
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </main>
  );
}
