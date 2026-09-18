import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "scarf-penguin",
  name: msg`Scarf penguin`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
