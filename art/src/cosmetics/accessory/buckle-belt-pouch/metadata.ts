import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "buckle-belt-pouch",
  name: msg`Belt pouch`,
  slot: "accessory",
  rarity: "common",
} as const satisfies CosmeticMetadata;
