import { SysFields, ContentfulLink } from "./Contentful";

// Allowed values for specific fields
type Region = "NA" | "JP" | "PAL";
type PlayedStatus =
  | "Untouched"
  | "Unfinished"
  | "Beaten"
  | "Completed"
  | "Abandoned";
type WtbWts = "WTB" | "WTS";

// All of the fields which are available on the Game content type in Contentful
export type Game = {
  sys: SysFields;
  title: string;
  slug: string;
  system: {
    sys: ContentfulLink & { linkType: "Entry" };
    slug: string;
  };
  region?: Region;
  currentlyPlaying?: boolean;
  requirementsForCompletion?: string;
  playedStatus?: PlayedStatus;
  highScore?: number;
  wtbWts?: WtbWts;
  digital?: boolean;
  photos?: { sys: ContentfulLink & { linkType: "Asset" } }[];
  raId?: number;
};

// Just the fields required for linking to a game
export type GameLink = Pick<Game, "sys" | "title" | "slug" | "system">;
