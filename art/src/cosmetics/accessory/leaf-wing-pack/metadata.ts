import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "leaf-wing-pack",
  name: msg`Leaf wings`,
  slot: "accessory",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
