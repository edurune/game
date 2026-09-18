import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "harbor-sailor-set",
  name: msg`Harbor sailor`,
  slot: "full_body",
  rarity: "common",
} as const satisfies CosmeticMetadata;
