"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

/** Direction the content travels in from while it fades up into place. */
type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

type Tag = "div" | "ul" | "li" | "section" | "article";

const OFFSET = 32;

// Starting transform for each direction. We animate transform + opacity only,
// so the browser keeps the whole reveal on the compositor (off the main
// thread) — no per-frame JS like an animation library would cost.
const HIDDEN_TRANSFORM: Record<Direction, string> = {
  up: `translateY(${OFFSET}px)`,
  down: `translateY(-${OFFSET}px)`,
  left: `translateX(${OFFSET}px)`,
  right: `translateX(-${OFFSET}px)`,
  scale: "scale(0.94)",
  fade: "none",
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Fires once when `ref` first scrolls into view. Falls back to "always shown"
 * when IntersectionObserver is unavailable or the user prefers reduced motion.
 */
function useInView(amount: number) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      // No scroll trigger available — reveal on the next frame.
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: amount, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [amount]);

  return { ref, shown };
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
  /** Where the content eases in from. Defaults to a gentle slide up. */
  direction?: Direction;
  /** Fraction of the element that must be visible before it animates. */
  amount?: number;
};

/**
 * Single scroll reveal. Fades + slides its content into place once it enters
 * the viewport, using a CSS transition (no JS runs per frame).
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  direction = "up",
  amount = 0.2,
}: RevealProps) {
  const { ref, shown } = useInView(amount);
  const Tag = as as ElementType;

  const style: CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : HIDDEN_TRANSFORM[direction],
    transition: `opacity 0.6s ${EASE}, transform 0.6s ${EASE}`,
    transitionDelay: shown ? `${delay}s` : "0s",
    willChange: shown ? undefined : "opacity, transform",
  };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
  /** Kept for API compatibility; per-child `delay` props drive the cascade. */
  stagger?: number;
  amount?: number;
};

/**
 * Layout container for a grid/row of <Reveal> cards. Each child reveals itself
 * as it enters view; the cascade comes from the per-child `delay` props the
 * call sites already pass. This is just the wrapping element now.
 */
export function RevealGroup({
  children,
  className,
  as = "div",
}: RevealGroupProps) {
  const Tag = as as ElementType;
  return <Tag className={className}>{children}</Tag>;
}
