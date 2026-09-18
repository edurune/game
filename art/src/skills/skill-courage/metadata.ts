import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-courage",
  description: msg`Temporarily increases all allies’ attack.`,
  name: msg`Courage`,
} as const satisfies ItemMetadata;
