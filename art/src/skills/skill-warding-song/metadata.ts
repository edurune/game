import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-warding-song",
  description: msg`Grants all allies a temporary shield.`,
  name: msg`Warding song`,
} as const satisfies ItemMetadata;
