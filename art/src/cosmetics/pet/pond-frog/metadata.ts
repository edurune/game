import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "pond-frog",
  name: msg`Pond frog`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
