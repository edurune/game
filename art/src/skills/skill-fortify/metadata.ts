import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-fortify",
  description: msg`Temporarily increases defense.`,
  name: msg`Fortify`,
} as const satisfies ItemMetadata;
