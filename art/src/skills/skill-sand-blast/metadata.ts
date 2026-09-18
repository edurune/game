import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-sand-blast",
  description: msg`Damages an enemy and temporarily lowers their attack.`,
  name: msg`Sand blast`,
} as const satisfies ItemMetadata;
