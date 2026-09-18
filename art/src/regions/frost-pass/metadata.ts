import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "frost-pass",
  title: msg`Snow pass`,
  description: msg`Mountain pass covered in snow.`,
} as const satisfies ItemMetadata;
