import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow loading the dev server from the local network (e.g. testing on a
  // phone or another device on the LAN). Next 16 blocks cross-origin dev
  // assets — including the HMR socket and client chunks needed for hydration
  // — by default.
  allowedDevOrigins: ["192.168.18.5"],

  // Tree-shake icon barrels so only the icons we actually use ship to the
  // client (keeps the JS bundle — and Total Blocking Time — small).
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
};

export default nextConfig;
