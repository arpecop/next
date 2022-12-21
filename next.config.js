/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/news/:page",
        destination: "/news/?page=:page",
      },
      {
        source: "/",
        destination: "/",
      },
      {
        source: "/fb/",
        destination: "/_fb/facebook",
      },
      {
        source: "/fb/:appid",
        destination: "/_fb/facebook?appid=:appid",
      },
      {
        source: "/fb/r/:id",
        destination: "/_fb/facebook?id=:id",
      },

      {
        source: "/tw/",
        destination: "/twitter/twitter",
      },
      {
        source: "/tw/:page",
        destination: "/twitter/twitter?page=:page",
      },
      {
        source: "/tw/:page/:letter",
        destination: "/twitter/?page=:page&letter=:letter",
      },
      {
        source: "/cat/:cat/:page",
        destination: "/cat/:cat/?page=:page",
      },
      {
        source: "/movies/p/:page",
        destination: "/movies/?page=:page",
      },
    ];
  },
};

module.exports = nextConfig;
// v 2
