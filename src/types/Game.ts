export type Game = {
  sys: {
    firstPublishedAt?: string;
    publishedAt?: string;
  };
  title: string;
  system: {
    slug: string;
    shortName: string;
  };
  slug: string;
  region: string;
  digital: boolean;
};
