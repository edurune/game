import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "brass-clockwork-bird",
  name: msg`Clockwork bird`,
  slot: "pet",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
