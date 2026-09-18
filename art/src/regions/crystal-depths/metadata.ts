import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "crystal-depths",
  title: msg`Crystal cave`,
  description: msg`Rocky cavern lined with crystals.`,
} as const satisfies ItemMetadata;
