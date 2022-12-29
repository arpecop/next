/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from "@apollo/client";

import type { GetServerSideProps } from "next";

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import { doQuery } from "@/pages/api/graphql";;

import type { News } from "@/pages/news/";
import { shuffle } from "../../../../utils/rudash";

const NewsItem = ({
  newsbg,
  slug,
  newsbg_by_pk: { title, image, uid, parsed },
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
          cat='Новини'
          image={image}
          imgtype='image/jpeg'
          url={`https://kloun.lol/news/i/${slug}/${uid}`}
        />
      }
    >
      <article className='pt-8 flex w-full flex-col'>
        <div className='container mx-auto'>
          <div className='mb-6 flex items-center justify-center'>
            {image && (
              <div className='mr-4 pt-2'>
                <img
                  alt={title}
                  className=' rounded-lg object-cover'
                  src={image}
                />
              </div>
            )}
            <h1 className='font-bold sm:text-2xl md:text-4xl'>{title}</h1>
          </div>

          <article className='leading-relaxed'>
            {parsed?.html.map((p: string) => (
              <p key={p}>{p}</p>
            ))}
          </article>
        </div>

        <div className='flex flex-wrap'>
          {newsbg?.map((item) => (
            <div className='joke' key={item.uid}>
              <div className='jokewrap'>
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

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { newsid, slug } = query as { newsid: string; slug?: string };

  const data = await doQuery(
    gql`
      query MyQuery($newsid: String!) {
        getDdb(id: $newsid) {
          title
          data
          image
          content
          id
        }
      }
    `,
    {
      newsid,
    }
  );

  // const content = data.content.length > 30 ? JSON.parse(data.content) : {};

  const content = JSON.parse(JSON.parse(data?.content)) as {
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
