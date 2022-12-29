import { DocumentNode } from "@apollo/client";
import { print } from "graphql";

import cors from "cors";
import { gql } from "graphql-tag";
import { NextApiRequest, NextApiResponse } from "next/types";
const proxyurl =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000/api/graphql"
		: "https://kloun.lol/api/graphql";

async function doQuery(
	query: any,
	variables: { [key: string]: string | number }
) {
	console.log("stringified", JSON.stringify(print(query)));
	const response = await fetch(proxyurl, {
		method: "POST",
		body: JSON.stringify({
			query: print(query),
			variables,
		}),
	});

	const d = await response.json();
	return Object.values(d)[0] as {
		items: { [key: string]: string | number }[];
		nid?: string;
		nextToken?: string;
	} & {
		[key: string]: string;
	};
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	cors();
	const { query, variables, operationName } = JSON.parse(req.body);
	console.log(query);
	const response = await fetch(
		"https://n5hlcijfibe3zacynh4p3mk4w4.appsync-api.eu-west-1.amazonaws.com/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-api-key": "da2-lyxskmkifbcrzbjbczvujpzhwa",
			},
			body: JSON.stringify({
				query,
				variables,
				operationName,
			}),
		}
	);

	const data = await response.json();
	console.log(data);

	res.status(200).json(data.data);
};

// const client = ...

async function doMQuery(
	query: DocumentNode,
	variables: { [key: string]: string | number }
) {
	const response = await fetch("http://localhost:3000/api/graphql", {
		method: "POST",
		body: JSON.stringify({
			query: print(query),
			variables,
		}),
	});

	const d = await response.json();

	return d.data as { [key: string]: { items: { [key: string]: string }[] } };
}

async function doMutation(
	query: DocumentNode,
	variables: { [key: string]: string | number }
) {
	const d = await doQuery(query, variables);
	return d;
}

export { doMQuery, doMutation, doQuery, gql };
