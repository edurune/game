import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-sting",
  description: msg`Damages an enemy and temporarily lowers their defense.`,
  name: msg`Sting`,
} as const satisfies ItemMetadata;
