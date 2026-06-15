/**
 * AAStack brand colour theme. Single import for use anywhere in JS/TSX.
 *
 * SINGLE SOURCE OF TRUTH = the `@theme` block in `src/app/globals.css`.
 * Change a hex value there once and it updates:
 *   - every Tailwind class (bg-electric, text-navy, border-violet, ...)
 *   - every value below, because they point at the same CSS variables
 *
 * Usage (inline styles, charts, canvas, framer-motion, etc.):
 *
 *   import { theme } from "@/theme";
 *   <div style={{ background: theme.electric, color: theme.navy }} />
 *   <div style={{ boxShadow: `0 0 40px ${theme.withAlpha("electric", 0.4)}` }} />
 *
 * For normal markup keep using Tailwind utilities (bg-electric, text-navy, ...).
 * They read from the very same tokens, so colours never drift apart.
 */

/** Brand palette. Each value resolves to its CSS variable from globals.css. */
const colors = {
  /** Page background (very light blue-white) */
  ink: "var(--color-ink)",
  /** Soft sections and footer background */
  inkSoft: "var(--color-ink-soft)",
  /** Card surface (white) */
  surface: "var(--color-surface)",
  /** Primary dark text (logo navy) */
  navy: "var(--color-navy)",
  /** Logo sky blue (primary accent) */
  electric: "var(--color-electric)",
  electricLight: "var(--color-electric-light)",
  /** Royal blue (secondary accent) */
  violet: "var(--color-violet)",
  violetLight: "var(--color-violet-light)",
  cyan: "var(--color-cyan)",
} as const;

export type ThemeColor = keyof typeof colors;

export const theme = {
  ...colors,
  /**
   * Translucent version of any token, e.g.
   * theme.withAlpha("navy", 0.08) gives a faint navy tint.
   */
  withAlpha(token: ThemeColor, alpha: number) {
    return `color-mix(in oklab, ${colors[token]} ${alpha * 100}%, transparent)`;
  },
} as const;

export default theme;
