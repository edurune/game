import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "starfish-pal",
  name: msg`Starfish`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
