import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-awaken",
  description: msg`Temporarily increases attack and speed.`,
  name: msg`Awaken`,
} as const satisfies ItemMetadata;
