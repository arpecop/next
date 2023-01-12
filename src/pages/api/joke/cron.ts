import {NextApiRequest, NextApiResponse} from "next";

import {doMutation, doQuery, gql} from "@/pages/api/graphql";
import {fbtoken} from "../refetch";
import {Doc} from "../../../data/structure";
import {shuffle} from "lodash";
import {profanityRemove} from "@/utils/formatter";
import {numToString} from "@/components/NewPagination";

export const cronidjokes = "crommercheim";

async function prepare() {
  const data1 = await doQuery(
    gql`
      query MyQuery($id: String = "") {
        queryDdbsByByAppCat(type: $id, first: 1) {
          items {
            id
            joke
            nid
          }
        }
      }
    `,
    {id: cronidjokes}
  );

  const tok = data1.items[0].joke;

  const data = await doQuery(
    gql`
      query MyQuery($cat: String!, $nextToken: String) {
        queryDdbsByByCat(cat: $cat, first: 30, after: $nextToken) {
          items {
            id
            joke: title
          }
          nextToken
        }
      }
    `,
    {
      cat: `JOKРазни`,
      nextToken: tok,
    }
  );

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
      id: cronidjokes,
      nid: numToString(new Date(2222, 0, 1).getTime() - Date.now()),
    }
  );
  return data.items;
}

export default async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const data = await prepare();

  const child_attachments = data
    .sort((a: Doc, z: Doc) => z.joke.length - a.joke.length)
    .map((item: Doc) => ({
      link: `https://kloun.lol/joke/${item.id}`,
      name: profanityRemove(
        shuffle(item.joke.split(" "))
          .filter((i) => i.length >= 5)
          .slice(0, 25)
          .join(" ")
          .toLowerCase()
      ),
      picture: `https://kloun.lol/api/joke/og/?idx=${item.id}&w=550&h=550`,
    }))
    .slice(0, 5);

  const res2 = await fetch(
    `https://graph.facebook.com/me/accounts?access_token=${fbtoken}`
  );
  // "103340854630134" <- old one
  const datax = await res2.json();
  const jokestoken = datax.data.find(
    (x: {id: string}) => x.id === "111266738511276"
  ).access_token as string;

  const rawResponse = await fetch(
    `https://graph.facebook.com/111266738511276/feed?access_token=${jokestoken}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "#виц #вицове #забавно",
        link: "https://kloun.lol/cat/razni/",
        multi_share_end_card: false,
        child_attachments,
      }),
    }
  );
  const resp = await rawResponse.json();

  res.json({child_attachments, resp});
};
