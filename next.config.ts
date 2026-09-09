import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/calculadora-de-horas',
        destination: '/',
        permanent: true,
      },
      {
        source: '/calculadora-de-turno-noturno',
        destination: '/turno-noturno',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
