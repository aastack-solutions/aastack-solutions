"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// lottie-react touches `document` on mount, so load it client-only to keep SSR
// happy. It's also a heavy main-thread renderer, so we don't pull it (or the
// animation JSON) into the page until the placeholder scrolls into view.
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type ChatbotLottieProps = {
  className?: string;
  /** Pause the loop until hovered/in-view if you want; defaults to always looping. */
  loop?: boolean;
};

export default function ChatbotLottie({
  className,
  loop = true,
}: ChatbotLottieProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [animationData, setAnimationData] = useState<any>(null);

  // Mount the player only once the element is near the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Lazy-load the (large) animation JSON as its own chunk, only when needed.
  useEffect(() => {
    if (inView && !animationData) {
      import("@/data/live-chatbot.json").then((m) =>
        setAnimationData(m.default),
      );
    }
  }, [inView, animationData]);

  return (
    <div ref={ref} className={className} aria-hidden>
      {inView && animationData && (
        <Lottie animationData={animationData} loop={loop} autoplay />
      )}
    </div>
  );
}
