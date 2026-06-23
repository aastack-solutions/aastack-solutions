import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seo";

/**
 * Dynamic sitemap served at /sitemap.xml. Using the Next.js convention (rather
 * than a static public/sitemap.xml) keeps URLs in sync with SITE_URL and avoids
 * a route conflict — you can't have both a static file and this route at the
 * same path.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/work`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/case-studies`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/faqs`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
