import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiFlutter,
  SiDart,
  SiAndroid,
  SiApple,
  SiFirebase,
  SiNodedotjs,
  SiPython,
  SiOpenai,
  SiFigma,
} from "react-icons/si";
import Reveal from "./Reveal";
import stackLogo from "../../public/stack.png";

type Tech = {
  icon: IconType;
  label: string;
  /** Official brand colour. */
  color: string;
};

const TECHS: Tech[] = [
  { icon: SiFlutter, label: "Flutter", color: "#02569B" },
  { icon: SiDart, label: "Dart", color: "#0175C2" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#0b1f4d" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { icon: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  { icon: SiPython, label: "Python", color: "#3776AB" },
  { icon: SiOpenai, label: "AI / OpenAI", color: "#412991" },
  { icon: SiAndroid, label: "Android", color: "#3DDC84" },
  { icon: SiApple, label: "iOS", color: "#0b1f4d" },
  { icon: SiFigma, label: "Figma", color: "#F24E1E" },
];

function Badge({ tech, lift }: { tech: Tech; lift?: boolean }) {
  return (
    <div
      title={tech.label}
      className={`group flex h-14 w-14 items-center justify-center rounded-full bg-surface shadow-card ring-1 ring-navy/[0.06] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover sm:h-[4.5rem] sm:w-[4.5rem] ${
        lift ? "sm:-translate-y-6" : "sm:translate-y-6"
      }`}
    >
      <tech.icon
        aria-hidden
        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
        style={{ color: tech.color }}
      />
      <span className="sr-only">{tech.label}</span>
    </div>
  );
}

export default function TechStack() {
  // Split the badges into two rows; each row leaves a gap in the middle
  // so the brand logo sits dead-centre of the cluster.
  const topRow = TECHS.slice(0, 8);
  const bottomRow = TECHS.slice(8);
  const splitRow = (row: Tech[]) => [
    row.slice(0, Math.ceil(row.length / 2)),
    row.slice(Math.ceil(row.length / 2)),
  ];
  const [topLeft, topRight] = splitRow(topRow);
  const [bottomLeft, bottomRight] = splitRow(bottomRow);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            Technologies We Use
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Our Tech <span className="text-accent">Stack</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-navy/60">
            Delivering solutions that empower businesses to grow, innovate, and
            succeed in a fast-evolving digital world.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Desktop: two rows with a centred logo in the gap */}
          <div className="relative mx-auto mt-20 hidden max-w-4xl sm:block">
            <div className="flex flex-col items-center gap-y-12">
              <div className="flex items-center justify-center gap-x-8">
                {topLeft.map((t, i) => (
                  <Badge key={t.label} tech={t} lift={i % 2 === 0} />
                ))}
                <div className="w-44 shrink-0" aria-hidden />
                {topRight.map((t, i) => (
                  <Badge key={t.label} tech={t} lift={i % 2 === 1} />
                ))}
              </div>
              <div className="flex items-center justify-center gap-x-8">
                {bottomLeft.map((t, i) => (
                  <Badge key={t.label} tech={t} lift={i % 2 === 1} />
                ))}
                <div className="w-44 shrink-0" aria-hidden />
                {bottomRight.map((t, i) => (
                  <Badge key={t.label} tech={t} lift={i % 2 === 0} />
                ))}
              </div>
            </div>

            {/* Center brand logo */}
            <Image
              src={stackLogo}
              alt="AAStack Solutions"
              priority
              className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_12px_30px_rgba(11,31,77,0.25)]"
            />
          </div>

          {/* Mobile: logo on top, badges wrap below */}
          <div className="mt-12 flex flex-col items-center sm:hidden">
            <Image
              src={stackLogo}
              alt="AAStack Solutions"
              className="h-24 w-24 object-contain drop-shadow-[0_10px_24px_rgba(11,31,77,0.22)]"
            />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              {TECHS.map((t) => (
                <Badge key={t.label} tech={t} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
