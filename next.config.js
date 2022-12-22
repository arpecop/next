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
        source: "/api/facebook/img/:appid/:id.png",
        destination: "/api/facebook/img/:appid/?id=:id",
      },
      {
        source: "/fb/",
        destination: "/facebook/facebook",
      },
      {
        source: "/fb/:appid",
        destination: "/facebook/facebook?appid=:appid",
      },

      {
        source: "/fb/:appid/:id",
        destination: "/facebook/facebook?id=:id&appid=:appid",
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
