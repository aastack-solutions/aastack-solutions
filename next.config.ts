import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow loading the dev server from the local network (e.g. testing on a
  // phone or another device on the LAN). Next 16 blocks cross-origin dev
  // assets — including the HMR socket and client chunks needed for hydration
  // — by default, which leaves framer-motion content stuck at opacity:0.
  allowedDevOrigins: ["192.168.18.5"],
};

export default nextConfig;
