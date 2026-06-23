import { Bot, TrendingUp, Smartphone, Clock } from "lucide-react";

const STATS = [
  { icon: Bot, value: "70%", label: "Support automated" },
  { icon: TrendingUp, value: "200%", label: "Traffic growth" },
  { icon: Smartphone, value: "10k+", label: "App downloads" },
  { icon: Clock, value: "24h", label: "Reply time" },
];

export default function HeroStats() {
  return (
    <dl className="relative z-20 mx-auto -mt-20 grid w-full max-w-5xl grid-cols-2 gap-3.5 px-5 sm:px-8 lg:grid-cols-4">
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className="anim-fade-up group relative cursor-default overflow-hidden rounded-2xl border border-navy/10 bg-white p-5 shadow-card transition-[transform,border-color] duration-300 hov:scale-[1.035] hov:border-electric/40"
          style={{ animationDelay: `${0.2 + i * 0.1}s` }}
        >
          {/* Background fills upward on hover */}
          <span
            aria-hidden
            className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-br from-electric to-violet transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hov:scale-y-100"
          />

          <div className="relative z-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-electric transition-colors duration-300 group-hov:bg-white/20 group-hov:text-white">
              <s.icon size={18} />
            </div>
            <dt className="mt-3.5 font-display text-2xl font-bold text-navy transition-colors duration-300 group-hov:text-white sm:text-3xl">
              {s.value}
            </dt>
            <dd className="mt-0.5 text-[0.8rem] text-navy/55 transition-colors duration-300 group-hov:text-white/85 sm:text-sm">
              {s.label}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
