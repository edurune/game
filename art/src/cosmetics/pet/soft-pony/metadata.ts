import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "soft-pony",
  name: msg`Gentle pony`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
