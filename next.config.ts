import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
