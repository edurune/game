import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-healing-song",
  description: msg`Restores health to all allies.`,
  name: msg`Healing song`,
} as const satisfies ItemMetadata;
