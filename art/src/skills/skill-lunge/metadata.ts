import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-lunge",
  description: msg`Damages an enemy and temporarily lowers their defense.`,
  name: msg`Lunge`,
} as const satisfies ItemMetadata;
