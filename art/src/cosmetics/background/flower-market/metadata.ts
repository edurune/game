import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "flower-market",
  name: msg`Flower market`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
