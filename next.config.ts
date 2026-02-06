import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Suppress cross-origin warning for local dev
  allowedDevOrigins: ["localhost:3000", "192.168.1.183:3000", "192.168.1.183"],
};

export default nextConfig;
