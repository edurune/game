import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-barrage",
  description: msg`Damages all enemies.`,
  name: msg`Barrage`,
} as const satisfies ItemMetadata;
