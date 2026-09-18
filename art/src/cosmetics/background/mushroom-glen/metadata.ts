import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "mushroom-glen",
  name: msg`Mushroom glen`,
  slot: "background",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
