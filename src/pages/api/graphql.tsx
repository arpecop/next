import { print } from "graphql";
import type { NextRequest } from "next/server";
import cors from "cors";
import { gql } from "graphql-tag";

const proxyurl =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000/api/graphql"
		: "https://kloun.lol/api/graphql";

async function doQuery(
	query: any,
	variables: { [key: string]: string | number | boolean }
) {
	const response = await fetch(
		proxyurl +
		"?query=" +
		JSON.stringify(print(query)) +
		"--splitter--" +
		JSON.stringify(variables) +
		"--splitter--" +
		query.definitions[0].name.value
	);

	const d = await response.json();
	return variables.multi
		? d
		: (Object.values(d)[0] as {
			items: { [key: string]: string | number }[];
			nid?: string;
			nextToken?: string;
		} & {
			[key: string]: string;
		});
}
export default async function handler(req: NextRequest) {
	cors();
	const d = decodeURIComponent(req.url.replace(/\+/g, " "))
		.split("?query=")[1]
		.split("--splitter--");
	const formattedQuery = JSON.parse(d[0]);
	const formattedVariables = JSON.parse(d[1]);
	const response = await fetch(
		"https://n5hlcijfibe3zacynh4p3mk4w4.appsync-api.eu-west-1.amazonaws.com/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-api-key": "da2-lyxskmkifbcrzbjbczvujpzhwa",
			},
			body: JSON.stringify({
				query: formattedQuery,
				variables: formattedVariables,
				operationName: d[2],
			}),
		}
	);

	const data = await response.json();

	return new Response(JSON.stringify(data.data), {
		status: 200,
		headers: {
			"content-type": "application/json",
		},
	});
}

async function doMutation(
	query: any,
	variables: { [key: string]: string | number }
) {
	const d = await doQuery(query, variables);
	return d;
}

export const runtime = "experimental-edge";

export { doMutation, doQuery, gql };
