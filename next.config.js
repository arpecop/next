/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  assetPrefix: 'https://eziktokbuild.kloun.pages.dev',
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
