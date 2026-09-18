import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-flurry",
  description: msg`Strikes an enemy twice.`,
  name: msg`Flurry`,
} as const satisfies ItemMetadata;
