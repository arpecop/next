/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';
import {eng} from "stopword";
import Main from "@/components/Layouts/Main";
import Meta from "@/components/Layouts/Meta";
import NoSSR from "@/components/NoSSR";
import {decode} from "html-entities";
import {doQuery, gql} from "../api/graphql";

export type Tweet = {
  screenName: string;
  name: string;
  description: string;
  profileImageUrl: string;
  tweets: ItemTweet[];
};
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

function removewords(str: string) {
  const urlRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
  const userRegex = /@[a-zA-Z]*/g;
  const hashTags = /#[a-zA-Z]*/g;
  const expressions = /\b’[a-zA-Z]+\b/gi;
  const stopWordRegex = new RegExp(`\\b(${eng.join("|")})\\b`, "gi");
  //const emojiRegex = /[\u2700-\u27bf]|[\ud83c][\udde6-\uddff]|[\ud83d][\udc00-\ude4f]|[\ud83d][\ude80-\udeff]/gi;
  //.replace(emojiRegex, (match) => `--=${match}=--`);

  const processedSentence = decode(str)
    .replace(expressions, (match: string) => `--=${match}=--`)
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

  return {substrings, keywordMatch};
}

const TemplatizeElement = ({
  obj,
}: {
  obj: string | {id: number; text: string}[];
}): JSX.Element => {
  let str = obj;
  if (Array.isArray(str)) {
    str = str.map((x) => x.text).join("\n");
  }
  const lines = str.split("\n").map((line) => templatizeline(line));

  const jsx = lines.map(({substrings, keywordMatch}, i) => {
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
  username,
}: {
  username: string;
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
            {t.originalPoster && (
              <a
                className="flex  items-center"
                href={"/tw/u/" + t.originalPoster.screenName}
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
                  {t.originalPoster.screenName} :
                </div>
              </a>
            )}
            <div className="flex flex-col">
              <TemplatizeElement obj={t.text} />
            </div>
          </div>
        </div>
      ))}
      <NoSSR>
        <style dangerouslySetInnerHTML={{__html: cssx}} />
      </NoSSR>
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
  const cssx = templatizeline(data.tweets)
    .keywordMatch?.map(
      (x) => `.pseudo${normalizestr(x)}::before { content: "${x}";}`
    )
    .join("\n");

  return {
    props: {
      cssx,
      username: id,
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
