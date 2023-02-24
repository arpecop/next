import type {NextApiRequest, NextApiResponse} from "next";

import {Buffer} from "buffer";

//const encrypted = Buffer.from("").toString("hex");
export const fbtoken = Buffer.from(
  "454141476641626f57445741424142493048774773434d3368357a484933596663376d536931636a35354550383477324d643848554c564e74437a4d61347a53595255784e5745507335356f5a437352796a587857394d3352727433745a434b4f5162617241664332666274496f5a426b646c676f37306d746e68755a424c70384151383138715774304547615072727856396a743444466d5a4179527161496f456b3334413066514f6f475a425a41664c3432496e5734",
  "hex"
).toString("utf8");

async function fsfetcher(req: NextApiRequest, res: NextApiResponse) {
  const url = req.query.url as string;
  const res2 = await fetch(
    `https://graph.facebook.com/?id=${encodeURIComponent(
      url
    )}&access_token=${fbtoken}`
  );
  const data = await res2.json();

  res.status(200).json(data);
}

export default fsfetcher;
