import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // o el dominio externo que uses
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
