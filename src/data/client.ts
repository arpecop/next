import {
  ApolloClient,
  DefaultOptions,
  DocumentNode,
  gql,
  InMemoryCache
} from "@apollo/client";

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

// const client = ...

async function doQuery(
  query: DocumentNode,
  variables: { [key: string]: string | number }
) {
  const d = await client.query({ query, variables: { ...variables } });

  return Object.values(d.data)[0] as {
    items: { [key: string]: string | number }[];
    nid?: string;
    nextToken?: string;
  } & {
    [key: string]: string;
  };
}

async function doMQuery(
  query: DocumentNode,
  variables: { [key: string]: string | number }
) {
  const d = await client.query({ query, variables: { ...variables } });

  return d.data as { [key: string]: { items: { [key: string]: string }[] } };
}

async function doMutation(
  query: DocumentNode,
  variables: { [key: string]: unknown }
) {
  const d = await client.mutate({
    mutation: query,
    variables: { ...variables },
  });

  return Object.values(d.data)[0] as { [key: string]: string | number };
}

export { doMQuery, doMutation, doQuery, gql };
