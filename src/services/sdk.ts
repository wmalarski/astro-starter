import { fetch } from "cross-fetch";
import { env } from "./env";
import { getSdk, Requester } from "./types";

export const jsonFetcher: Requester = async (documentNode, variables) => {
  const query = documentNode.loc?.source.body;

  const result = await fetch(env.GRAPHQL_API_ENDPOINT, {
    body: JSON.stringify({ query, variables }),
    headers: { "content-type": "application/json" },
    method: "POST",
  });

  const json = await result.json();

  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(
      JSON.stringify({ definitions: documentNode.definitions, json }, null, 2)
    );
  }

  return json;
};

export const sdk = getSdk(jsonFetcher);
