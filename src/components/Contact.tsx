"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";
import ChatbotLottie from "./ChatbotLottie";
import Reveal from "./Reveal";
import { CONTACT, SOCIAL } from "@/data/site";

const INQUIRIES = [
  "General inquiry",
  "AI solutions",
  "Web & App development",
  "SEO & marketing",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-navy/12 bg-white/80 px-4 py-3 text-[0.95rem] text-navy placeholder:text-navy/40 outline-none transition-all duration-300 hover:border-navy/25 focus:border-electric focus:bg-white focus:ring-4 focus:ring-electric/10";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [inquiry, setInquiry] = useState(INQUIRIES[0]);
  const [notRobot, setNotRobot] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Guard: require the human check before submitting.
    if (!notRobot) return;
    // Front-end only demo: wire to your email / form backend here.
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-14 text-navy sm:py-28">
      {/* Soft elegant backdrop blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <Reveal direction="right">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s build something{" "}
              <span className="text-accent">great together.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-navy/70">
              Tell us about your project and we&apos;ll get back to you within 24
              hours.
            </p>

            <div className="mt-8 space-y-3">
              <ContactRow
                href={`mailto:${CONTACT.email}`}
                icon={<Mail size={18} />}
                label="Email us"
                value={CONTACT.email}
              />
              <ContactRow
                href={`tel:${CONTACT.phoneHref}`}
                icon={<Phone size={18} />}
                label="Call us"
                value={CONTACT.phone}
              />
              <ContactRow
                href={SOCIAL.linkedin}
                external
                icon={<LinkedinIcon size={18} />}
                label="Connect"
                value="LinkedIn"
              />

              <div className="flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-navy/60">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  <Clock size={18} />
                </span>
                <span className="text-sm">Replies within 24 hours</span>
              </div>
            </div>

            {/* Friendly chatbot — nods at the visitor while they reach out */}
            <ChatbotLottie className="mt-6 hidden w-full max-w-xs sm:block" />
          </Reveal>

          {/* Right: form */}
          <Reveal direction="left" delay={0.1}>
            <div className="card relative overflow-hidden rounded-3xl p-6 transition-shadow duration-500 hover:shadow-card-hover sm:p-8">
              {/* Accent top bar */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electric via-violet to-electric"
              />
              {sent ? (
                <div className="anim-pop-in flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                  <span className="anim-pop-icon flex h-20 w-20 items-center justify-center rounded-full bg-electric/10">
                    <CheckCircle2 size={44} className="text-electric" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold">
                    Message sent!
                  </h3>
                  <p className="mt-2 max-w-xs text-navy/70">
                    Thanks for reaching out. We&apos;ll get back to you within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-navy/5"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-1">
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      Send us a message
                    </h3>
                    <p className="mt-1 text-sm text-navy/55">
                      Fill in the details and we&apos;ll reply shortly.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Contact number">
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+92 300 1234567"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Inquiry type">
                      <div className="relative">
                        <select
                          name="inquiry"
                          value={inquiry}
                          onChange={(e) => setInquiry(e.target.value)}
                          className={`${inputClass} cursor-pointer appearance-none pr-10`}
                        >
                          {INQUIRIES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={18}
                          aria-hidden
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-navy/40"
                        />
                      </div>
                    </Field>
                  </div>

                  <Field label="Message">
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project"
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  {/* Simple human check (front-end only demo) */}
                  <button
                    type="button"
                    onClick={() => setNotRobot((v) => !v)}
                    aria-pressed={notRobot}
                    className="flex w-full items-center gap-3 rounded-xl border border-navy/12 bg-white/80 px-4 py-3.5 text-left transition-all duration-300 hover:border-navy/25"
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-all duration-300 ${
                        notRobot
                          ? "border-electric bg-electric text-white"
                          : "border-navy/30 bg-white"
                      }`}
                    >
                      {notRobot && <CheckCircle2 size={16} />}
                    </span>
                    <span className="text-sm font-medium text-navy/75">
                      I&apos;m not a robot
                    </span>
                    <span className="ml-auto text-[0.65rem] font-medium uppercase tracking-wide text-navy/35">
                      Privacy
                    </span>
                  </button>

                  <button
                    type="submit"
                    disabled={!notRobot}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-electric px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-electric/90 hover:shadow-card-hover active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-electric"
                  >
                    Send message
                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>

                  <p className="text-center text-xs text-navy/45">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  href,
  icon,
  label,
  value,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 transition-all duration-300 hover:border-electric/15 hover:bg-white/70 hover:shadow-soft"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric transition-colors duration-300 group-hover:bg-electric group-hover:text-white">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium uppercase tracking-wide text-navy/45">
          {label}
        </span>
        <span className="block break-all text-[0.95rem] font-medium text-navy/85 transition-colors group-hover:text-electric">
          {value}
        </span>
      </span>
      <ArrowUpRight
        size={16}
        className="ml-auto shrink-0 text-navy/30 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-electric group-hover:opacity-100"
      />
    </a>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-navy/75">
        {label}
      </span>
      {children}
    </label>
  );
}
