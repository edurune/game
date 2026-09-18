import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-mending-rain",
  description: msg`Restores health to all allies.`,
  name: msg`Mending rain`,
} as const satisfies ItemMetadata;
