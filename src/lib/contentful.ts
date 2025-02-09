import { GraphQLClient } from "graphql-request";

const spaceId = process.env.CONTENTFUL_SPACE_ID!;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;

export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

// fetchContent will take a query and variables and return the data from Contentful
export async function fetchContent(query: string, variables = {}) {
  return client.request(query, variables);
}
