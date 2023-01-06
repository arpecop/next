import fs from "fs";
import {NextApiRequest, NextApiResponse} from "next";

type Value = string | object;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // Read the "key" and "value" fields from the request body
    const {key, value} = req.body;

    // Validate the input
    if (!key || !value) {
      res.status(400).send("Missing required fields");
      return;
    }

    // Write the value to a file in the /tmp directory with the key as the file name
    fs.writeFileSync(`/tmp/${key}.json`, JSON.stringify(value));
    res.status(200).send("Success");
  } else if (req.method === "GET") {
    // Read the "key" field from the query string
    const {key} = req.query;

    // Validate the input
    if (!key) {
      res.status(400).json({e: "Missing required fields"});
      return;
    }

    // Read the value from the file in the /tmp directory with the key as the file name
    const value = fs.readFileSync(`/tmp/${key}.json`).toString();

    // Try to parse the value as JSON
    let parsedValue: Value;
    try {
      parsedValue = JSON.parse(value);
    } catch (error) {
      parsedValue = value;
    }

    res.status(200).send(parsedValue);
  } else {
    res.status(405).json({e: "Method Not Allowed"});
  }
};
