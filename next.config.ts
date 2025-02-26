import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyjson.com",
        port: "",
        pathname: "/icon/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
