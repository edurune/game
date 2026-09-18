import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-weaken",
  description: msg`Temporarily lowers all enemies’ attack.`,
  name: msg`Weaken`,
} as const satisfies ItemMetadata;
