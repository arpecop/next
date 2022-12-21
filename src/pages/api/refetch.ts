import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const url = req.query.url as string;
	const res2 = await fetch(
		`https://graph.facebook.com/?id=${encodeURIComponent(
			url
		)}&fields=engagement&access_token=${process.env.FB_KEY}`
	);
	const data = await res2.json();

	res.status(200).json({ ...data, test: process.env.FB_KEY });
};
