import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-regroup",
  description: msg`Temporarily increases all allies’ defense.`,
  name: msg`Regroup`,
} as const satisfies ItemMetadata;
