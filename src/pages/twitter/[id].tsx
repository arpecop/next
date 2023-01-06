/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import NoSSR from "@/components/NoSSR";
import {useState} from "react";
import Twemoji from "react-twemoji";
import {doQuery, gql} from "../api/graphql";

export type ItemTweet = {
  id: string;
  text: string | {id: number; text: string}[];
  screenName: string;
  name: string;
  profileImageUrl: string;
  createdAt: string;
  originalPoster: {
    screenName: string;
    name: string;
    profileImageUrl: string;
  } | null;
};

export type Tweet = {
  screenName: string;
  name: string;
  description: string;
  profileImageUrl: string;
  tweets: ItemTweet[];
};

export default function TwuserPage({tweets}: {tweets: Tweet}) {
  const [meta, setMetas] = useState<ItemTweet[]>([]);

  return (
    <Main
      hideFooter
      meta={
        <Meta title={tweets.description} description={tweets.description} />
      }
    >
      {tweets.tweets.map((t) => (
        <div key={t.id}>
          <NoSSR>
            <div className="flex flex-shrink-0 p-4 pb-0">
              <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <picture>
                    <img
                      className="inline-block h-10 w-10 rounded-full"
                      src={tweets.profileImageUrl}
                      alt=""
                    />
                  </picture>
                  <div className="ml-2">
                    <p className="text-base leading-6 font-bold">
                      {tweets.name}
                      <span className="text-sm leading-5 font-medium  pl-2">
                        {t.createdAt}
                      </span>
                      {t.originalPoster ? " retweeted:" : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NoSSR>
          <div>
            {t.originalPoster ? (
              <a
                className="flex  items-center"
                href={"/tw/u/" + t.originalPoster.screenName}
              >
                <NoSSR>
                  <picture>
                    <img
                      className="inline-block h-5 w-5 rounded-full ml-14"
                      src={t.originalPoster.profileImageUrl}
                      alt=""
                    />
                  </picture>
                </NoSSR>
                <div className="text-base leading-6 font-bold pl-2">
                  {t.originalPoster.screenName} :
                </div>
              </a>
            ) : (
              <div className="h-1" />
            )}
            <div className="flex">
              <Twemoji options={{className: "w-4 float-left pt-0.5 mr-1"}}>
                {typeof t.text === "string"
                  ? t.text.split("\n").map((p, i) => (
                      <div key={i} className="pl-14 w-full">
                        {p}
                      </div>
                    ))
                  : t.text.map((p) => (
                      <div key={p.id} className="pl-14 w-full">
                        {p.text}
                      </div>
                    ))}
              </Twemoji>
            </div>
          </div>
        </div>
      ))}
    </Main>
  );
}

export const getServerSideProps = async ({query}: {query: {id: string}}) => {
  const id = query.id;

  const data = await doQuery(
    gql`
      query MyQuery($id: String!) {
        getDdb(id: $id) {
          description
          name
          profileImageUrl
          tweets
        }
      }
    `,
    {
      id: id + "_tw",
    }
  );

  return {
    props: {
      tweets: {
        description: data.description,
        name: data.name,
        profileImageUrl: data.profileImageUrl,
        tweets: JSON.parse(data.tweets),
      },
    },
  };
};

export const runtime = "experimental-edge";
