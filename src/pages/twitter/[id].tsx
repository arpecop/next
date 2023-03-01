/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';
import { eng } from "stopword";
import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import NoSSR from "@/components/NoSSR";

import db from "@/data/client";

export type Tweet = {
  screenName: string;
  name: string;
  description: string;
  profileImageUrl: string;
  tweets: ItemTweet[];
};
export type ItemTweet = {
  id: string;
  text: string | { id: number; text: string }[];
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

function removewords(str: string) {
  const urlRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
  const userRegex = /@[a-zA-Z]*/g;
  const hashTags = /#[a-zA-Z]*/g;
  const expressions = /\b’[a-zA-Z]+\b/gi;
  const expressions2 = /\b'[a-zA-Z]+\b/gi;
  const stopWordRegex = new RegExp(`\\b(${eng.join("|")})\\b`, "gi");
  //const emojiRegex = /[\u2700-\u27bf]|[\ud83c][\udde6-\uddff]|[\ud83d][\udc00-\ude4f]|[\ud83d][\ude80-\udeff]/gi;
  //.replace(emojiRegex, (match) => `--=${match}=--`);

  const processedSentence = str
    .replace(expressions, (match: string) => `--=${match}=--`)
    .replace(expressions2, (match: string) => `--=${match}=--`)
    .replace(stopWordRegex, (match: string) => `--=${match}=--`)
    .replace(hashTags, (match: string) => `--=${match}=--`)
    .replace(userRegex, (match: string) => `--=${match}=--`)
    .replace(urlRegex, (match) => `--=${match}=--`);

  return processedSentence;
}

function templatizeline(str: string) {
  const filtered = removewords(str);
  const keywordRegex = /--=(.*?)=--/g;
  const substrings = filtered.split(keywordRegex);
  const keywordMatch = filtered
    .match(keywordRegex)
    ?.map((x) => x.replace("--=", "").replace("=--", ""));

  return { substrings, keywordMatch };
}

const TemplatizeElement = ({
  obj,
}: {
  obj: string | { id: number; text: string }[];
}): JSX.Element => {
  let str = obj;
  if (Array.isArray(str)) {
    str = str.map((x) => x.text).join("\n");
  }
  const lines = str.split("\n").map((line) => templatizeline(line));

  const jsx = lines.map(({ substrings, keywordMatch }, i) => {
    return (
      <p key={i} className="ml-14">
        {substrings.map((substring, index) => {
          if (keywordMatch?.includes(substring)) {
            return (
              <NoSSR key={index}>
                <span className={"pseudo" + normalizestr(substring)} />
              </NoSSR>
            );
          }
          return substring;
        })}
      </p>
    );
  });

  return <>{jsx}</>;
};
function normalizestr(str: string) {
  return str
    .replace("@", "")
    .replaceAll("'", "")
    .replaceAll("/", "")
    .replaceAll(".", "")
    .replaceAll(":", "");
}

export default function TwuserPage({
  tweets,
  cssx,
  exist,
  username,
}: {
  username: string;
  exist?: string[];
  tweets: Tweet;
  cssx: string;
}) {
  //const [meta, setMetas] = useState<ItemTweet[]>([]);

  return (
    <Main
      hideFooter
      meta={
        <Meta
          title={`${username} public tweets on twitter`}
          description={tweets.description}
        />
      }
    >
      <div className=" flex justify-center items-center">
        <ins
          className="adsbygoogle"
          style={{ dislay: 'block', width: 250 }}
          data-ad-format="fluid"
          data-ad-layout-key="-hh-7+2h-1m-4u"
          data-ad-client="ca-pub-5476404733919333"
          data-ad-slot="6719003089"
        />
      </div>

      {tweets.tweets.map((t) => (
        <div
          key={t.id}
          className="bg-gray-800 dark:bg-white mb-2 rounded-md border boder-1 dark:border-gray-500 pb-2"
        >
          <NoSSR>
            <div className="flex flex-shrink-0 p-2 pb-0">
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
                    <p className="leading-6 font-light text-xl">
                      {tweets.name}
                      <div className="text-xs leading-5 font-light">
                        {t.createdAt}{" "}
                        {t.originalPoster ? "| retweeted:" : "| tweeted:"}
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NoSSR>
          <div>
            {t.originalPoster && (
              <a
                className="flex items-center w-auto bg-black w-fit"
                href={
                  exist?.includes(t.originalPoster.screenName)
                    ? "/tw/u/" + t.originalPoster.screenName
                    : "https://twitter.com/" + t.originalPoster.screenName
                }
              >
                <NoSSR>
                  <picture>
                    <img
                      className="inline-block h-5 w-5 rounded-full ml-14"
                      src={t.originalPoster.profileImageUrl
                        .replace("=--", "")
                        .replace("--=", "")}
                      alt=""
                    />
                  </picture>
                </NoSSR>
                <div className="text-base leading-6 font-bold pl-2">
                  {t.originalPoster.name} :
                </div>
              </a>
            )}
            <div className="flex flex-col">
              <TemplatizeElement obj={t.text} />
            </div>
          </div>
        </div>
      ))}
      <div className=" flex justify-center items-center">
        <ins
          className="adsbygoogle"
          style={{ dislay: 'block', width: 250 }}
          data-ad-format="fluid"
          data-ad-layout-key="-hh-7+2h-1m-4u"
          data-ad-client="ca-pub-5476404733919333"
          data-ad-slot="6719003089"
        />
      </div>
      <NoSSR>
        <style dangerouslySetInnerHTML={{ __html: cssx }} />
      </NoSSR>
    </Main>
  );
}

export const getServerSideProps = async ({ query }: { query: { id: string } }) => {
  const id = query.id;
  const data = await db.get(id + "_tw");
  const cssx = templatizeline(JSON.stringify(data.tweets))
    .keywordMatch?.map(
      (x) => `.pseudo${normalizestr(x)}::before { content: "${x}";}`
    )
    .join("\n");
  const reposts = Array.from(
    new Set(
      data.tweets
        .filter((item: ItemTweet) => item.originalPoster)
        .map(
          (user: { originalPoster: { screenName: string } }) =>
            user.originalPoster.screenName + "_tw"
        )
    )
  );
  const existget = await db.view("twitter/exist", {
    update: false,
    keys: JSON.stringify(reposts),
    nocdn: "ok",
  });
  const exist = existget.rows?.map((it: { id: string }) =>
    it.id.replace("_tw", "")
  );

  return {
    props: {
      cssx,
      username: id,
      exist: exist || null,
      tweets: {
        description: data.description,
        name: data.name,
        profileImageUrl: data.profileImageUrl,
        tweets: data.tweets,
      },
    },
  };
};

export const runtime = "experimental-edge";
//x
