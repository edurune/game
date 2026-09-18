import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-vigor",
  description: msg`Restores health and grants a temporary shield.`,
  name: msg`Vigor`,
} as const satisfies ItemMetadata;
