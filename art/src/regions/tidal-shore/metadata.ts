import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "tidal-shore",
  title: msg`Tidal shore`,
  description: msg`Sandy shore beside the sea.`,
} as const satisfies ItemMetadata;
