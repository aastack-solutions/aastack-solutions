import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg" | "icon";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Renders a Next.js Link when provided, otherwise a native button. */
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  "aria-label"?: string;
  "aria-current"?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-electric to-violet text-white shadow-[0_10px_28px_-10px_var(--color-electric)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_var(--color-electric)]",
  outline:
    "border border-electric/40 text-electric hover:-translate-y-0.5 hover:bg-electric hover:text-white",
  ghost: "text-navy/70 hover:bg-electric/5 hover:text-electric",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
  icon: "h-12 w-12 p-0",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  ...aria
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {/* subtle sheen sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full overflow-hidden rounded-2xl bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hov:translate-x-full"
      />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    // Open external links (Calendly, etc.) in a new tab.
    const external = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...aria}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...aria}>
      {content}
    </button>
  );
}
