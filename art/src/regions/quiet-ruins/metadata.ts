import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "quiet-ruins",
  title: msg`Ruins`,
  description: msg`Weathered stone remains of a forgotten place.`,
} as const satisfies ItemMetadata;
