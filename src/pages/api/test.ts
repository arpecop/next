import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	// Check if the file exists in the /tmp directory
	const fileExists = fs.existsSync("/tmp/date.txt");

	if (!fileExists) {
		const date = new Date().toString();
		fs.writeFileSync("/tmp/date.txt", date);

		res.status(200).json({ d: date });
	}
	// If the file exists, read the date from the file and return it
	else {
		const date = fs.readFileSync("/tmp/date.txt").toString();

		res.status(200).json({ d: date });
	}
};
