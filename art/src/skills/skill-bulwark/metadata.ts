import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-bulwark",
  description: msg`Grants a temporary shield.`,
  name: msg`Bulwark`,
} as const satisfies ItemMetadata;
