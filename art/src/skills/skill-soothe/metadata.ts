import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-soothe",
  description: msg`Restores health to all allies.`,
  name: msg`Soothe`,
} as const satisfies ItemMetadata;
