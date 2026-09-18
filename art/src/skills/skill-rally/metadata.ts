import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-rally",
  description: msg`Temporarily increases all allies’ attack.`,
  name: msg`Rally`,
} as const satisfies ItemMetadata;
