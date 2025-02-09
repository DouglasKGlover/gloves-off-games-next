import { SysFields } from "./Contentful";

export type Photo = {
  sys: SysFields;
  url: string;
  thumbnail: string;
};
