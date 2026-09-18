import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-shell-guard",
  description: msg`Grants a temporary shield.`,
  name: msg`Shell guard`,
} as const satisfies ItemMetadata;
