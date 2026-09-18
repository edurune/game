import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-brace",
  description: msg`Grants a temporary shield.`,
  name: msg`Brace`,
} as const satisfies ItemMetadata;
