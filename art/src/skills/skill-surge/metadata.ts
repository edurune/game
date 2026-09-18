import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-surge",
  description: msg`Temporarily increases attack and speed.`,
  name: msg`Surge`,
} as const satisfies ItemMetadata;
