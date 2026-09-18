import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "shell-hermit",
  name: msg`Hermit crab`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
