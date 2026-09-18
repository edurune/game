import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-molten-shell",
  description: msg`Grants a temporary shield.`,
  name: msg`Molten shell`,
} as const satisfies ItemMetadata;
