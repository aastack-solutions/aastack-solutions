import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seo";

/** Served at /robots.txt — allows all crawlers and points to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
