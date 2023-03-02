/** @type {import('next').NextConfig} */

const nextConfig = {
  //output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['static.dir.bg'],
  },
  async rewrites() {
    return [
      {
        source: "/news/:page",
        destination: "/news/?page=:page",
      },
      {
        source: "/img/:appid/:id.png",
        destination: "/api/facebook/:appid/svg/:id/img/",
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
        source: "/tw/u/:id",
        destination: "/twitter/:id",
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
        source: "/business/:page",
        destination: "/business/?page=:page",
      },
      {
        source: "/movies/p/:page",
        destination: "/movies/?page=:page",
      },
    ];
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/other/about": { page: "/other/about" },
    };
  },
};

module.exports = nextConfig;
// v 2
