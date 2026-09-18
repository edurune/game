import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../../types.ts";

export default {
  id: "soft-crop",
  name: msg`Short crop`,
} as const satisfies ItemMetadata;
