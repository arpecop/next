import {DocumentNode, print} from "graphql";

import {gql} from "graphql-tag";

type Variables = {[key: string]: string | number | boolean};

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
  const opname = query.definitions[0] as {name: {value: string}};

  const d = await fetcher({
    query: print(query),
    variables,
    operationName: opname.name.value,
  });

  return variables.multi
    ? d
    : (Object.values(d)[0] as {
        items: {[key: string]: string | number}[];
        nid?: string;
        nextToken?: string;
      } & {
        [key: string]: string;
      });
}
export default function handler() {
  return new Response(JSON.stringify({}), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

async function doMutation(
  query: DocumentNode,
  variables: {[key: string]: string | number}
) {
  const d = await doQuery(query, variables);
  return d;
}

export const runtime = "experimental-edge";

export {doMutation, doQuery, gql};
