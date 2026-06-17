"use client";

import dynamic from "next/dynamic";
import animationData from "@/data/live-chatbot.json";

// lottie-react touches `document` on mount, so load it client-only to keep SSR happy.
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
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay
      className={className}
      aria-hidden
    />
  );
}
