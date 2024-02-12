import { MutableRefObject } from "react";

export type Section = {
  title: string,
  ref: MutableRefObject<HTMLDivElement | null>
};