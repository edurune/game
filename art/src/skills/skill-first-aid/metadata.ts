import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-first-aid",
  description: msg`Restores health.`,
  name: msg`First aid`,
} as const satisfies ItemMetadata;
