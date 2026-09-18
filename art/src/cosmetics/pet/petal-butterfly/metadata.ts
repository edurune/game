import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "petal-butterfly",
  name: msg`Petal butterfly`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
