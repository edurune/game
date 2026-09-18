import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../../types.ts";

export default {
  id: "impact-hit",
  name: msg`Hit`,
  description: msg`A brief burst at the point of impact.`,
} as const satisfies ItemMetadata;
