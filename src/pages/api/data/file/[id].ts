import type {NextApiRequest, NextApiResponse} from "next";

import path from "path";

import {readFileSync} from "fs";

type Params = {
  [key: string]: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rootfolder = __dirname.split(".next")[0];

  const {id} = req.query as Params;

  const ff = path.resolve(rootfolder, `public/data/${id}.json`);
  const items = JSON.parse(readFileSync(ff).toString());

  res.json(items);
}
