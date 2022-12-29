import { DocumentNode, print } from "graphql";
import type { NextRequest } from "next/server";

import { gql } from "graphql-tag";

type Variables = { [key: string]: string | number | boolean };

async function fetcher({
	query,
	variables,
	operationName,
}: {
	query: string;
	variables: Variables;
	operationName: string;
}) {
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
				variables: variables,
				operationName: operationName,
			}),
		}
	);
	const d = await response.json();
	return d.data;
}

async function doQuery(query: DocumentNode, variables: Variables) {
	const opname = query.definitions[0] as { name: { value: string } };

	const d = await fetcher({
		query: print(query),
		variables,
		operationName: opname.name.value,
	});

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
	const d = decodeURIComponent(req.url.replace(/\+/g, " "))
		.split("?query=")[1]
		.split("--splitter--");
	const data = await fetcher({
		query: JSON.parse(d[0]),
		variables: JSON.parse(d[1]),
		operationName: d[2],
	});

	return new Response(JSON.stringify(data), {
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
