import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-sanctuary",
  description: msg`Grants all allies a temporary shield.`,
  name: msg`Sanctuary`,
} as const satisfies ItemMetadata;
