/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';
import type { GetServerSideProps } from "next";

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";

import type { News } from "@/pages/news/";

import { shuffle } from "lodash";
import db from "@/data/client";

const NewsItem = ({
  newsbg,
  newsbg_by_pk: { title, image, parsed },
}: {
  newsbg: News[];
  newsbg_by_pk: News;
  slug: string;
}): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title={title}
          description={parsed?.description || parsed?.html[0] || title}
          image={image}
          imgtype="image/jpeg"
        />
      }
    >
      <article className="pt-8 flex w-full flex-col">
        <div className="container mx-auto">
          <div className="mb-6 flex items-center justify-center">
            {image && (
              <div className="mr-4 pt-2">
                <img
                  alt={title}
                  className=" rounded-lg object-cover"
                  src={image}
                />
              </div>
            )}
            <h1 className="font-bold sm:text-2xl md:text-4xl">{title}</h1>
          </div>
          <div className=" flex justify-center items-center">

            <amp-ad width="100vw" height="320"
              type="adsense"
              data-ad-client="ca-pub-5476404733919333"
              data-ad-slot="6617253971"
              data-auto-format="rspv"
              data-full-width="">
              <div overflow=""></div>
            </amp-ad>
          </div>
          <article className="leading-relaxed">
            {parsed?.html.map((p: string) => (
              <p key={p}>{p}</p>
            ))}
          </article>
        </div>

        <div className="flex flex-wrap">
          {newsbg?.map((item) => (
            <div className="joke" key={item.id}>
              <div className="jokewrap">
                <img
                  alt={title}
                  src={JSON.parse(image[0])}
                  width={200}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </article>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const { newsid, slug } = query as { newsid: string; slug?: string };

  const data = await db.get(newsid);

  const content = JSON.parse(data?.content) as {
    description: null;
    html: string[];
  };
  const shufflprep = content.html
    ? shuffle(
      content.html
        .join(" ")
        .split(".")
        .map((p: string) => `${shuffle(p.split(" ")).join(" ")}.`)
    )
    : null;
  const shuffled = shufflprep
    ?.map((p: string) => {
      const rid = Math.floor(Math.random() * 5);
      return `${p.charAt(0).toUpperCase() + p.slice(1)} ${rid === 0 ? "-=splitter=-" : ""
        }`;
    })
    .join(" ")
    .split("-=splitter=-");

  const props = {
    newsbg_by_pk: {
      ...data,
      description: content.description || null,
      parsed: {
        html: JSON.stringify(req.headers).includes("Googlebot")
          ? shuffled
          : content.html,
      },
    },
    newsbg: [],
    slug,
  };

  return {
    props,
  };
};

export default NewsItem;
export const runtime = "experimental-edge";
