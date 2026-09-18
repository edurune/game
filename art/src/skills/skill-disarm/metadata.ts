import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-disarm",
  description: msg`Damages an enemy and temporarily lowers their attack.`,
  name: msg`Disarm`,
} as const satisfies ItemMetadata;
