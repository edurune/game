import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "round-chick",
  name: msg`Fluffy chick`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
