import { GraphQLClient } from "graphql-request";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
});

// fetchContent will take a query and variables and return the data from Contentful
export async function fetchContent(query: string, variables = {}) {
  return client.request(query, variables);
}
