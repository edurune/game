import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "clay-piglet",
  name: msg`Clay piglet`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
