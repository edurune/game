import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-ward",
  description: msg`Grants a temporary shield.`,
  name: msg`Ward`,
} as const satisfies ItemMetadata;
