import { NextApiRequest, NextApiResponse } from "next";
import { ulid } from "ulidx";
import { doMutation, doQuery, gql } from "../../../data/client";

export const LIST_JOKES = /* GraphQL */ gql`
  query MyQuery($cat: String!, $nextToken: String) {
    queryDdbsByByCat(cat: $cat, first: 5, after: $nextToken) {
      items {
        id
        joke: title
        cat
      }
      nextToken
    }
  }
`;

const id = "cronnerjokesx";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	res.setHeader("Cache-Control", "no-cache");
	const data1 = await doQuery(
		gql`
      query MyQuery($id: String = "") {
        queryDdbsByByAppCat(type: $id, first: 10) {
          items {
            id
          }
        }
      }
    `,
		{ id }
	);
	console.log(data1.items);
	const tok = data1.items?.[0]?.joke;

	const data = await doQuery(LIST_JOKES, {
		cat: `JOKРазни`,
		nextToken: tok,
	});
	console.log({
		prev: tok,

		next: data.nextToken,
	});
	const insert = await doMutation(
		gql`
      mutation MyMutation(
        $joke: String = ""
        $id: String = ""
        $nid: String = ""
      ) {
        createDdb(
          input: {
            joke: $joke
            type: $id
            cat: "pagination"
            nid: $nid
            price: 0
          }
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
	console.log(insert);

	res.json({
		data: data,
		timestamp: Date.now(),
	});
};
// bea60699-8dad-4b7e-bcff-167ae7ef8152 f83769fc-eeb9-40f5-bc4f-aeef42c1ce2b
