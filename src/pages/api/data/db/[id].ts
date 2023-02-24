import type {NextApiRequest, NextApiResponse} from "next";
import db from "@/data/client";
type Params = {
  [key: string]: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {id} = req.query as Params;
  const data = await db.get(id);
  res.json(data);
}
