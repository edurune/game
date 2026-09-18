import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-aegis",
  description: msg`Grants all allies a temporary shield.`,
  name: msg`Aegis`,
} as const satisfies ItemMetadata;
