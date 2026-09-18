import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-focus",
  description: msg`Temporarily increases attack.`,
  name: msg`Focus`,
} as const satisfies ItemMetadata;
