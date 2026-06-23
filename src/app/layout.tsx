import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Aurora from "@/components/Aurora";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileHover from "@/components/MobileHover";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/data/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Build Smarter. Launch Faster. Rank Higher.`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "AAStack Solutions — custom web apps, mobile apps, AI automation, and SEO for businesses that want to grow.",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#eef3fb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-ink font-sans text-navy antialiased">
        <Aurora />
        <MobileHover />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
