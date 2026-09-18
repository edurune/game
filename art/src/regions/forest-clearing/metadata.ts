import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "forest-clearing",
  title: msg`Forest clearing`,
  description: msg`Open clearing among the trees.`,
} as const satisfies ItemMetadata;
