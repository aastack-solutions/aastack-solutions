import {
  ShoppingBag,
  HeartPulse,
  Wallet,
  GraduationCap,
  Building2,
  UtensilsCrossed,
  Plane,
  Rocket,
} from "lucide-react";
import Reveal from "./Reveal";

const INDUSTRIES = [
  { icon: ShoppingBag, name: "Ecommerce & Retail", desc: "Stores that convert and scale." },
  { icon: HeartPulse, name: "Healthcare & Wellness", desc: "Secure, patient friendly platforms." },
  { icon: Wallet, name: "Finance & FinTech", desc: "Trusted, data driven products." },
  { icon: GraduationCap, name: "Education & Elearning", desc: "Engaging learning experiences." },
  { icon: Building2, name: "Real Estate", desc: "Listings, portals & dashboards." },
  { icon: UtensilsCrossed, name: "Food & Restaurants", desc: "Ordering, delivery & booking." },
  { icon: Plane, name: "Travel & Logistics", desc: "Booking and tracking made simple." },
  { icon: Rocket, name: "Startups & SaaS", desc: "From MVP to product market fit." },
];

export default function Industries() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            Industries We Serve
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Built for <span className="text-accent">every industry</span>
          </h2>
          <p className="mt-4 text-lg text-navy/55">
            Whatever your field, we tailor AI, web, apps, and SEO to the way your
            business actually works.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((it, i) => (
            <Reveal key={it.name} delay={(i % 4) * 0.08}>
              <div className="group card relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric ring-1 ring-navy/10 transition-colors group-hover:bg-electric group-hover:text-white">
                  <it.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-navy">
                  {it.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/55">
                  {it.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
