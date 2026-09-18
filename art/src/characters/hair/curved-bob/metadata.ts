import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../../types.ts";

export default {
  id: "curved-bob",
  name: msg`Bob`,
  description: msg`Short hair with rounded ends framing the face.`,
} as const satisfies ItemMetadata;
