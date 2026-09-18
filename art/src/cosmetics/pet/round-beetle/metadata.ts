import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "round-beetle",
  name: msg`Round beetle`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
