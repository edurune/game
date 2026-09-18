import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-renewal",
  description: msg`Restores health to all allies.`,
  name: msg`Renewal`,
} as const satisfies ItemMetadata;
