import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        hostname: "ilimitado.studio"
      }
    ]
  }
};

export default nextConfig;
