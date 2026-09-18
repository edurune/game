import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-mend",
  description: msg`Restores health.`,
  name: msg`Mend`,
} as const satisfies ItemMetadata;
