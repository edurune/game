import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "duckling-pal",
  name: msg`Duckling`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
