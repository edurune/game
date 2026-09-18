import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-regrowth",
  description: msg`Restores health.`,
  name: msg`Regrowth`,
} as const satisfies ItemMetadata;
