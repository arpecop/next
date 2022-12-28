import { ApolloClient, DefaultOptions, gql, InMemoryCache } from "@apollo/client";

import { NextApiRequest, NextApiResponse } from "next/types";

const defaultOptions: DefaultOptions = {
	watchQuery: {
		fetchPolicy: "no-cache",
		errorPolicy: "ignore",
	},
	query: {
		fetchPolicy: "no-cache",
		errorPolicy: "all",
	},
};

const client = new ApolloClient({
	uri: "https://n5hlcijfibe3zacynh4p3mk4w4.appsync-api.eu-west-1.amazonaws.com/graphql",
	headers: {
		"x-api-key": "da2-lyxskmkifbcrzbjbczvujpzhwa",
	},
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { query, variables } = req.body;
	//operationName
	if (query) {
		const d = await client.query({
			query: gql(query),
			variables,
		});
		res.status(200).json(d);
	} else {
		res.status(200).json({});
	}
};
