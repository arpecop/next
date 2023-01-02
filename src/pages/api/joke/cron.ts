import { NextApiRequest, NextApiResponse } from "next";
import { ulid } from "ulidx";
import { doMutation, doQuery, gql } from "@/pages/api/graphql";
import { fbtoken } from "../refetch";
import { Doc } from "../../../data/structure";

const id = "cronnerjokesx11";

async function prepare() {
  const data1 = await doQuery(
    gql`
      query MyQuery($id: String = "") {
        queryDdbsByByAppCat(type: $id, first: 1) {
          items {
            id
            joke
          }
        }
      }
    `,
    { id }
  );

  const tok =
    "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGdrUU45cHVuT1Y5bGVaV2l1QkFJMXcxVUZHemErVENzSVpuckw4S1IzQzJRSGpQSjhXbjllQzArejMvNXNGZGUrSkFBQURQakNDQXpvR0NTcUdTSWIzRFFFSEJxQ0NBeXN3Z2dNbkFnRUFNSUlESUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF3SDFSanRqeHJRZ1VsVzY4c0NBUkNBZ2dMeDRrYUFSQTVRSjZwRmpIWnFpRlNFYXdZTFRGVkdQa25aalI2Qnk4K3l3N204ZHZYODZLQWRxcGw0VkRUMWxZUzNHbmoySUFnVVd4cElCTWptK1h3YW84V0R1NkxQTWFDNWt6a0poNW9UWGdpT3hkeDdwOTFyNkkrQ2hqNzMzdU9kaFBpOU9ZS2Y1WS8zaHZmU0gveVlHZi96WUlOa05CdFVKcXBMbHBmNHJDWkhuQnRmbDZXbTR4WEJacGJsUmVnOXZSNjhqaW9jcnJSVGhNSHVTYy9rRll4aTloYnQ2U2VhV1Jyam5JaVJRdGFCa09UMGUxanIyNnN4d00vUUZvUG04cm1JUVdLc1AxMzF3Tk14TGVWNFNLVzM0QkJhbE5aR2RKMzJkbFI1UmI1eXlyVVpqNDhPNkdPV3IvS1dNcC9ZbEpZMFNDSjYwTkUrYTViTEpTUGtZeGx3SXA4elV5TlRtNGdTZzZzT0o5Qy9weTAzQTVHQnVpVFZvTTJDbS8rVzBpYU91WEZ6OXM3UmMybjkyM3Nhcjc0b3VXbWZhWmdZaWkzNkhENzR0TjJSOXo1dFpUbmJxVFJ2dVlUSCtIZC94Y0srbWMrOW5SNHpTQmVIakRIOENWNjExMkpCcHlWNlJJYjZvM2ZFOUNBczNhZENVY25sZzVBcE9mbVlMelcwN3p1MHV2Q1RsSy9vYUJEcmNEM0VKYWVlQ1dYZ2NuVmxwQ2hBV1VRcm82M0lEMFhNdWt1M1FudzdiaFR5RXhwN2RieTZiYkdqQldvQkZOMEVHNVZTTmlmTkg1cjFEV0VFQ3Q3NmdOQkFqRWVFWGNNSmF2NnJCRXRucFo2UCt0MVpxRDlUNGpoc2wzdy9DeWc4aTBnY1JocUtXMkpjN2VCTE85NWh3QXBxZklVNk9tRHZBeWJFZlRrbk5rY2x6RnE5TDluejJrWWpPcmJtWVlDNTYzVEpXNE1Wc25FK1Raclc4d21vRmNtOCtXQVo2WVV4TndoajFJQkxtcllHZ2RtdVZ5R0NxS2ZEZ1AvZ0VSS01lSWtYeCs5dFNjdHdvUDU2cG5kUVZkcjRqN1lRT0xqU2hxbDdsd3dQa2RlWDdSRkJOT2JVc3FvaEtDcVoydU0vdGZRSjBhaTVCb28vZFY5KzU2akVEaVBua2xLMmdCdjltS1ZvcTBaSnZNYUMwSm8rRzVLaGo2UlQzcVlISVdlZy9IZnIwMFU5VVVhdDlsQ2w2UXRoREVyNjhxbXpVVTZ2Q1ZwaEZFcEswVVlCR3Z0dzZsVXRQTSt0MEh2eXlRUkVXMnB0cFk4YzMrbm5LbFpmbUhmZzNUaWtNeWl4In0=";
  console.log(data1.items[0].joke, "token");

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
  console.log(data, "2222");
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
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const data = await prepare();
  const emojis = ["🤣", "🤪", "😁", "🤭", "😂"];

  const child_attachments = data
    .sort((a: Doc, z: Doc) => z.joke.length - a.joke.length)
    .map((item: Doc, i: number) => ({
      link: `https://kloun.lol/joke/${item.id}`,
      name: emojis[i],
      picture: `https://kloun.lol/api/joke/og/?idx=${item.id}&w=550&h=550`,
    }))
    .slice(0, 5);

  const res2 = await fetch(
    `https://graph.facebook.com/me/accounts?access_token=${fbtoken}`
  );
  // "103340854630134" <- old one
  const datax = await res2.json();
  const jokestoken = datax.data.find(
    (x: { id: string }) => x.id === "111266738511276"
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
