/** Central place for outbound links so they never drift apart. */

/** Calendly booking link used by every "free consultation" CTA. */
export const CALENDLY_URL = "https://calendly.com/malikaliyan-contact";

/** Business contact details (single source of truth). */
export const CONTACT = {
  email: "team.aastack@gmail.com",
  phone: "0325085467",
  /** E.164-ish form for tel: links (PK country code). */
  phoneHref: "+923250854670",
  address: "Shahrah-e-Faisal, Karachi, Pakistan",
  hours: "Mon – Fri, 9:00 AM – 6:00 PM (PKT)",
} as const;

/** Social profiles shown in the footer. */
export const SOCIAL = {
  linkedin: "https://linkedin.com",
} as const;
