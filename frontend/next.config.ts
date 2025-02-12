import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      'host.docker.internal',
      'http://localhost:9000',
      'localhost',
      '127.0.0.1',
      'localhost:9000',

    ],
  },
};

export default nextConfig;
