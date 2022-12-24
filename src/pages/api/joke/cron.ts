import { NextApiRequest, NextApiResponse } from "next";
import { ulid } from "ulidx";
import { doMutation, doQuery, gql } from "../../../data/client";
import { fbtoken } from "../refetch";

export const LIST_JOKES = /* GraphQL */ gql`
  query MyQuery($cat: String!, $nextToken: String) {
    queryDdbsByByCat(cat: $cat, first: 5, after: $nextToken) {
      items {
        id
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

  const insert = await doMutation(
    gql`
      mutation MyMutation(
        $joke: String = ""
        $id: String = ""
        $nid: String = ""
      ) {
        createDdb(
          input: { joke: $joke, type: $id, cat: $id, nid: $nid, price: 0 }
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

type Attachments = {
  type: string;
  payload: {
    template_type: string;
    elements: {
      title: string;
      image_url: string;
      subtitle: string;
    }[];
  };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await prepare();
  const emojis = ["🤣", "🤪", "😁", "🤭", "😂"];

  const child_attachments = data.map((item, i) => ({
    link: `https://kloun.lol/joke/${item.id}`,
    name: emojis[i],
    picture: `https://kloun.lol/api/joke/og/?idx=${item.id}&w=550&h=550`,
  }));

  const res2 = await fetch(
    `https://graph.facebook.com/me/accounts?access_token=${fbtoken}`
  );
  const datax = await res2.json();
  const jokestoken = datax.data.find((x: any) => x.id === "103340854630134")
    .access_token as string;

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
  const content = await rawResponse.json();

  res.json({ content, child_attachments });
};
// bea60699-8dad-4b7e-bcff-167ae7ef8152 f83769fc-eeb9-40f5-bc4f-aeef42c1ce2b
