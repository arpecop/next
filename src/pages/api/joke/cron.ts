import { NextApiRequest, NextApiResponse } from "next";
import { ulid } from "ulidx";
import { doMutation, doQuery, gql } from "@/pages/api/graphql";
import { fbtoken } from "../refetch";

export const LIST_JOKES = /* GraphQL */ gql`
  query MyQuery($cat: String!, $nextToken: String) {
    queryDdbsByByCat(cat: $cat, first: 30, after: $nextToken) {
      items {
        id
        joke: title
      }
      nextToken
    }
  }
`;

const id = "cronnerjokesx11";

async function prepare() {
  const data1 = await doQuery(
    gql`
      query MyQuery($id: String = "") {
        queryDdbsByByAppCat(type: $id, first: 10) {
          items {
            id
            joke
          }
        }
      }
    `,
    { id }
  );

  const tok = data1.items?.[0]?.joke;

  const data = await doQuery(LIST_JOKES, {
    cat: `JOKРазни`,
    nextToken: tok,
  });

  await doMutation(
    gql`
      mutation MyMutation(
        $joke: String = ""
        $id: String = ""
        $nid: String = ""
      ) {
        createDdb(
          input: {joke: $joke, type: $id, cat: $id, nid: $nid, price: 0}
        ) {
          id
        }
      }
    `,
    {
      joke: data.nextToken,
      id,
      nid: ulid(new Date(2222, 0, 1).getTime() - Date.now()),
    }
  );
  return data.items;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const data = await prepare();
  const emojis = ["🤣", "🤪", "😁", "🤭", "😂"];

  const child_attachments = data
    .sort((a: any, z: any) => z.joke.length - a.joke.length)
    .map((item: any, i: number) => ({
      link: `https://kloun.lol/joke/${item.id}`,
      name: emojis[i],
      picture: `https://kloun.lol/api/joke/og/?idx=${item.id}&w=550&h=550`,
    }))
    .slice(0, 5);

  const res2 = await fetch(
    `https://graph.facebook.com/me/accounts?access_token=${fbtoken}`
  );
  const datax = await res2.json();
  const jokestoken = datax.data.find(
    (x: { id: string }) => x.id === "103340854630134"
  ).access_token as string;

  const rawResponse = await fetch(
    `https://graph.facebook.com/103340854630134/feed?access_token=${jokestoken}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Ⓦ🅦🅆.㎘ou𝑛.l🅞l",
        link: "https://kloun.lol/cat/razni/",
        multi_share_end_card: false,
        child_attachments,
      }),
    }
  );
  const resp = await rawResponse.json();

  res.json({ child_attachments, resp });
};
