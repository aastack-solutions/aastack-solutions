export type Category = "General" | "Pricing & Timeline" | "Services" | "Support";

export type Faq = { q: string; a: string; category: Category };

export const FAQS: Faq[] = [
  {
    category: "Pricing & Timeline",
    q: "How much does a project cost?",
    a: "Every project is priced on scope, not a fixed menu. After a quick free consultation we send a clear, itemized quote with no hidden fees, so you know exactly what you're paying for before we start.",
  },
  {
    category: "Pricing & Timeline",
    q: "How long does it take to build a website or app?",
    a: "A focused website typically takes 2 to 4 weeks, while web or mobile apps usually run 4 to 10 weeks depending on features. We share a realistic timeline up front and keep you updated at every milestone.",
  },
  {
    category: "Pricing & Timeline",
    q: "Do you require the full payment upfront?",
    a: "No. We work in milestones, usually a deposit to begin and the balance split across agreed stages. You always see progress before the next payment is due.",
  },
  {
    category: "Services",
    q: "Can you add AI to my existing business or product?",
    a: "Yes. We build custom chatbots, AI agents, and automation that plug into the tools you already use, with no need to rebuild from scratch. We start small, prove the value, then scale.",
  },
  {
    category: "Services",
    q: "What technologies do you build with?",
    a: "Modern, battle-tested stacks: Next.js and React on the web, Flutter for mobile, and Firebase or Node for the backend, plus the leading AI models for intelligent features. We choose the right tool for your goals, not the trendiest one.",
  },
  {
    category: "Services",
    q: "Do you offer SEO and ongoing support?",
    a: "Absolutely. Beyond launch we offer SEO, performance tuning, security updates, and feature improvements. Think of us as a long term partner, not a one time vendor.",
  },
  {
    category: "General",
    q: "Do you work with startups and small businesses?",
    a: "Definitely. From first time founders with an idea to established businesses scaling up, we tailor the approach and budget to where you are, and grow with you.",
  },
  {
    category: "General",
    q: "Do you work remotely with clients in other time zones?",
    a: "Yes, we work with clients worldwide. We keep communication async-friendly and schedule live calls in overlapping hours, so distance is never a blocker.",
  },
  {
    category: "Support",
    q: "What happens after my project launches?",
    a: "We monitor, maintain, and optimize. You get after launch support, performance reports, and a direct line to us whenever you need changes or have questions.",
  },
  {
    category: "Support",
    q: "Who owns the code and design after delivery?",
    a: "You do, fully. Once the project is delivered and paid for, all code, design files, and accounts are handed over to you with no lock-in.",
  },
];

export const CATEGORIES: ("All" | Category)[] = [
  "All",
  "General",
  "Pricing & Timeline",
  "Services",
  "Support",
];
