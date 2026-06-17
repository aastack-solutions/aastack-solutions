"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, Send, CheckCircle2, Clock } from "lucide-react";
import { motion } from "framer-motion";
import LinkedinIcon from "./LinkedinIcon";
import ChatbotLottie from "./ChatbotLottie";
import { CONTACT, SOCIAL } from "@/data/site";

const SERVICES = ["AI", "Web & App", "SEO", "Other"];

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[0.95rem] text-navy placeholder:text-navy/40 outline-none transition-all focus:border-electric focus:ring-2 focus:ring-electric/20";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("Web & App");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-end only demo: wire to your email / form backend here.
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 text-navy sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div>
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

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 break-all text-navy/85 transition-colors hover:text-electric"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  <Mail size={18} />
                </span>
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="flex items-center gap-3 text-navy/85 transition-colors hover:text-electric"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  <Phone size={18} />
                </span>
                {CONTACT.phone}
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-navy/85 transition-colors hover:text-electric"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  <LinkedinIcon size={18} />
                </span>
                LinkedIn
              </a>
              <p className="flex items-center gap-3 text-navy/60">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  <Clock size={18} />
                </span>
                Replies within 24 hours
              </p>
            </div>

            {/* Friendly chatbot â€” nods at the visitor while they reach out */}
            <ChatbotLottie className="mt-6 hidden w-full max-w-xs sm:block" />
          </div>

          {/* Right: form */}
          <div className="card rounded-3xl p-6 sm:p-8">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center"
              >
                <CheckCircle2 size={56} className="text-electric" />
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
                  className="mt-6 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-navy/10"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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

                <Field label="Service needed">
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setService(s)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                          service === s
                            ? "bg-electric text-white shadow-soft"
                            : "bg-navy/10 text-navy/75 hover:bg-navy/15"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="service" value={service} />
                </Field>

                <Field label="Message">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project"
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-colors hover:bg-electric/90"
                >
                  Send
                  <Send
                    size={17}
                    className="transition-transform group-hov:translate-x-0.5 group-hov:-translate-y-0.5"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
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
