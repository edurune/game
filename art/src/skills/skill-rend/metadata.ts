import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-rend",
  description: msg`Damages an enemy and temporarily lowers their defense.`,
  name: msg`Rend`,
} as const satisfies ItemMetadata;
