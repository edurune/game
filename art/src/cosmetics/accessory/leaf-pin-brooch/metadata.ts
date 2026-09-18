import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "leaf-pin-brooch",
  name: msg`Leaf brooch`,
  slot: "accessory",
  rarity: "common",
} as const satisfies CosmeticMetadata;
