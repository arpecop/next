import type { NextApiRequest } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json([{ error: "Under Construction" }]);
};
