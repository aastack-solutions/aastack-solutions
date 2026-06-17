"use client";

import { createContext, useContext } from "react";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** Direction the content travels in from while it fades up into place. */
type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

type Tag = "div" | "ul" | "li" | "section" | "article";

const OFFSET = 32;

const HIDDEN: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: OFFSET },
  down: { y: -OFFSET },
  left: { x: OFFSET },
  right: { x: -OFFSET },
  scale: { scale: 0.94 },
  fade: {},
};

const EASE = [0.22, 1, 0.36, 1] as const;

const itemVariants = (direction: Direction): Variants => ({
  hidden: { opacity: 0, ...HIDDEN[direction] },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
});

// True when a <Reveal> is rendered inside a <RevealGroup>, so it should let
// the parent orchestrate the timing (cascade) instead of triggering itself.
const GroupContext = createContext(false);

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
 * the viewport. When wrapped in <RevealGroup> it instead animates as part of
 * the group's cascade (its own `delay` is handled by the group's stagger).
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  direction = "up",
  amount = 0.2,
}: RevealProps) {
  const grouped = useContext(GroupContext);
  const MotionTag = motion[as];
  const variants = itemVariants(direction);

  // Inside a group: no own trigger — the parent drives hidden → visible.
  if (grouped) {
    return (
      <MotionTag className={className} variants={variants}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      // Low `amount` + a small bottom margin keeps reveals reliable on
      // small screens where cards are tall and enter from the bottom.
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
  /** Gap between each child's reveal, in seconds. */
  stagger?: number;
  /** Fraction of the group that must be visible before the cascade starts. */
  amount?: number;
};

/**
 * Stagger container for a grid/row of cards. Triggers once when it scrolls
 * into view, then reveals each direct <Reveal> child one after another for a
 * smooth cascade. Drop it in place of the wrapping grid <div>.
 */
export function RevealGroup({
  children,
  className,
  as = "div",
  stagger = 0.1,
  amount = 0.15,
}: RevealGroupProps) {
  const MotionTag = motion[as];
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: 0.05 },
    },
  };

  return (
    <GroupContext.Provider value={true}>
      <MotionTag
        className={className}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      >
        {children}
      </MotionTag>
    </GroupContext.Provider>
  );
}
