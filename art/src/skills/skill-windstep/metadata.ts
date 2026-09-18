import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-windstep",
  description: msg`Temporarily increases speed and defense.`,
  name: msg`Windstep`,
} as const satisfies ItemMetadata;
