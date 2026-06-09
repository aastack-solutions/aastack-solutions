import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Aurora from "@/components/Aurora";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const SITE_URL = "https://aastack.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AAStack Solutions — Build Smarter. Launch Faster. Rank Higher.",
    template: "%s | AAStack Solutions",
  },
  description:
    "AAStack helps businesses grow with custom AI solutions, modern web & mobile apps, and SEO that actually drives traffic.",
  keywords: [
    "AI engineering",
    "AI chatbots",
    "web development",
    "mobile app development",
    "Flutter",
    "Firebase",
    "SEO",
    "Next.js agency",
  ],
  authors: [{ name: "AAStack" }],
  openGraph: {
    title: "AAStack — Build Smarter. Launch Faster. Rank Higher.",
    description:
      "Custom AI solutions, modern web & mobile apps, and SEO that drives real traffic.",
    url: SITE_URL,
    siteName: "AAStack",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AAStack — Build Smarter. Launch Faster. Rank Higher.",
    description:
      "Custom AI solutions, modern web & mobile apps, and SEO that drives real traffic.",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060f",
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
      <body className="min-h-full bg-ink font-sans text-white antialiased">
        <Aurora />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
