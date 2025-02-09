// All Contentful entities can return a sys object with these fields
export type SysFields = {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: { sys: { id: string; type: "Link"; linkType: "Environment" } };
  publishedVersion?: number;
  publishedAt?: string;
  firstPublishedAt?: string;
  createdBy: { sys: { id: string; type: "Link"; linkType: "User" } };
  updatedBy: { sys: { id: string; type: "Link"; linkType: "User" } };
  publishedCounter?: number;
  version: number;
  publishedBy?: { sys: { id: string; type: "Link"; linkType: "User" } };
  urn: string;
};

// A subset of the sys fields specifically for linking to other entities
export type ContentfulLink = Pick<SysFields, "id" | "type">;
