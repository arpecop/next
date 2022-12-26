/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  experimental: {
    runtime: "experimental-edge",
  },
};

module.exports = nextConfig;
// v 1
