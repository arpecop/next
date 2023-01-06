import type {NextApiRequest, NextApiResponse} from "next";

import {Buffer} from "buffer";

//const encrypted = Buffer.from("").toString("hex");
export const fbtoken = Buffer.from(
  "454141476641626f574457414241416b476f4845654e5063425a414874586331466c486e5a4245774f6f4f4f44496b4a6f514868514545784f68734f79375a4143633072415a41587249494931585a4241665a427142596d56635242344534394657626b347a48586255534a484e6c3246526b6f7151655844703750566b3664554b45346371635952386e486853455a41376465684e5079716f53485770777a3971654473424d7a586e594d5059446f65546131544c554c",
  "hex"
).toString("utf8");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = req.query.url as string;
  const apiurl = `https://graph.facebook.com/?id=${encodeURIComponent(
    url
  )}&scrape=true&access_token=${fbtoken}`;
  const res2 = await fetch(apiurl, {
    method: "POST",
  });
  const data = await res2.json();
  res.status(200).json(data);
};
