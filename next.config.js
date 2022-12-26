/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  experimental: {
    runtime: "experimental-edge",
  },
  async rewrites() {
    return [
      {
        source: '/ads/p/:page',
        destination: '/ads/?page=:page',
      },
      {
        source: '/ads/cat/:cat/p/:page',
        destination: '/ads/cat/:cat?page=:page',
      },
      {
        source: '/ads/cat/:cat/:subcat/p/:page',
        destination: '/ads/cat/:cat/:subcat/?page=:page',
      },
    ];
  },
};

module.exports = nextConfig;
// v 1
