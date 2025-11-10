import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Add empty turbopack config to silence the warning
  turbopack: {},

  webpack(config) {
    // Alias support for "@/..."
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": __dirname,
    };
    return config;
  },
};

export default nextConfig;

