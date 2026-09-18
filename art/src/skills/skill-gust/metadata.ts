import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-gust",
  description: msg`Damages all enemies.`,
  name: msg`Gust`,
} as const satisfies ItemMetadata;
