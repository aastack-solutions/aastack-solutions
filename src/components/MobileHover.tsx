"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Makes desktop hover effects work on touch screens.
 *
 * On phones/tablets there is no `:hover`, so all the `hov:` / `group-hov:`
 * card animations would never fire. This watches every `.group` card and
 * adds an `.is-active` class while the card sits near the centre of the
 * screen — the same visual the card shows on hover, now driven by scroll.
 *
 * It does nothing on devices that can actually hover (desktops/laptops),
 * so the real pointer hover stays in charge there.
 *
 * Rendered once from the root layout; re-scans on every route change.
 */
export default function MobileHover() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only take over on devices without a real hover (phones, most tablets).
    if (!window.matchMedia("(hover: none)").matches) return;

    let observer: IntersectionObserver | null = null;

    // Wait one frame so client-rendered cards are in the DOM.
    const raf = window.requestAnimationFrame(() => {
      const cards = document.querySelectorAll<HTMLElement>(".group");
      if (cards.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            entry.target.classList.toggle("is-active", entry.isIntersecting);
          }
        },
        // Treat only the central ~30% band of the screen as "active",
        // so the card lights up as it scrolls through the middle.
        { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
      );

      cards.forEach((card) => observer!.observe(card));
    });

    return () => {
      window.cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
