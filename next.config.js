/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  publicRuntimeConfig: {
    publicDir: "/public",
  },

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
        source: "/fb/result",
        destination: "/facebook/result",
      },
      {
        source: "/fb/",
        destination: "/facebook/facebookindex",
      },
      {
        source: "/fb/:appid",
        destination: "/facebook/facebookindex?appid=:appid",
      },

      {
        source: "/fb/:appid/:id",
        destination: "/facebook/facebookindex?id=:id&appid=:appid",
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
  exportPathMap: async function (
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId}
  ) {
    return {
      "/": {page: "/"},
      "/other/about": {page: "/other/about"},
    };
  },
};

module.exports = nextConfig;
// v 2
