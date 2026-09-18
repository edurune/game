import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "chestnut-puppy",
  name: msg`Chestnut puppy`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
