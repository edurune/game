import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-impede",
  description: msg`Temporarily slows down an enemy.`,
  name: msg`Impede`,
} as const satisfies ItemMetadata;
