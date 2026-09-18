import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../../types.ts";

export default {
  id: "close-buzz",
  name: msg`Buzz cut`,
} as const satisfies ItemMetadata;
