import type {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = req.query.url as string;
  const res2 = await fetch(url);
  const data = await res2.json();
  res.status(200).json(data);
};
