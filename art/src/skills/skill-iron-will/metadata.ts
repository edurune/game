import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-iron-will",
  description: msg`Temporarily increases defense and attack.`,
  name: msg`Iron will`,
} as const satisfies ItemMetadata;
