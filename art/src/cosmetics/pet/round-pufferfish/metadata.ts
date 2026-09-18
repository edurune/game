import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "round-pufferfish",
  name: msg`Round pufferfish`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
