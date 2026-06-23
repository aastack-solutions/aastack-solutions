import { ImageResponse } from "next/og";

// Site-wide social share image (1200×630) served at /og. Referenced explicitly
// by every page's metadata (see pageMetadata in src/data/seo.ts) so og:image
// and twitter:image are present and identical-sized on every route.
export const contentType = "image/png";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #07112b 0%, #0b1f4d 60%, #123a78 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#3aa0ee",
            fontWeight: 700,
          }}
        >
          AAStack Solutions
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 76,
            lineHeight: 1.05,
            fontWeight: 800,
          }}
        >
          Build Smarter. Launch Faster. Rank Higher.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 32,
            color: "rgba(255,255,255,0.78)",
          }}
        >
          Web Development · AI Automation · Chatbots · SEO
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 26,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Karachi, Pakistan · Working with clients worldwide
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
