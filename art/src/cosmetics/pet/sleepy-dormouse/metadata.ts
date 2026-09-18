import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "sleepy-dormouse",
  name: msg`Sleepy dormouse`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
