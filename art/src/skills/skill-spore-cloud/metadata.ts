import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-spore-cloud",
  description: msg`Damages all enemies and temporarily lowers their attack.`,
  name: msg`Spore cloud`,
} as const satisfies ItemMetadata;
