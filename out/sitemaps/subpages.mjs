/* eslint-disable prettier/prettier */
import fetch from "cross-fetch";
import fs from "fs";
import pkg from "lodash";

const {shuffle, chunk} = pkg;

const date = "2022-07-22T06:23:27.145Z";

fetch("http://db.kloun.lol/api/rest/others/structure/sitemaps")
  .then((res) => res.json())
  .then((data) => {
    const {jokes, news, business} = data;
    const jokesmap = jokes.flatMap((item) =>
      new Array(Math.round(item.count / 30))
        .fill(0)
        .map(
          (_, i) =>
            `<url> <loc>https://kloun.lol/cat/${item.cat.replace(
              / /g,
              "%20"
            )}/${
              i + 1
            }/</loc> <lastmod>${date}</lastmod> <changefreq>daily</changefreq> <priority>1.0</priority> </url>`
        )
    );

    const newsmap = new Array(Math.round(Number(news.aggregate.count) / 30))
      .fill(0)
      .map(
        (_, i) =>
          `<url> <lastmod>${date}</lastmod> <changefreq>daily</changefreq> <priority>1.0</priority> <loc>https://kloun.lol/news/${
            i + 1
          }/</loc> </url>`
      );

    const businessmap = business.flatMap((item) =>
      new Array(Math.round(item.count / 30))
        .fill(0)
        .map(
          (_, i) =>
            `<url> <lastmod>${date}</lastmod> <changefreq>daily</changefreq> <priority>0.7</priority> <loc>https://kloun.lol/business/${item.cat.replace(
              / /g,
              "%20"
            )}/${i + 1}/</loc> </url>`
        )
    );

    const sitemap = chunk(
      shuffle([...newsmap, ...jokesmap, ...businessmap]),
      1000
    );

    sitemap.forEach(async (element, i) => {
      fs.writeFileSync(
        `/Users/rudix/Desktop/kloun/public/sitemaps/out/sitemap${i + 1}.xml`,
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://w3.org/1999/xhtml" xmlns:mobile="http://google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://google.com/schemas/sitemap-image/1.1" xmlns:video="http://google.com/schemas/sitemap-video/1.1">\n${element.join(
          "\n"
        )}\n</urlset>`
      );
    });

    console.log(sitemap[0]);
  });
