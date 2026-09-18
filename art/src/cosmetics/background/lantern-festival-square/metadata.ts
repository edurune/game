import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "lantern-festival-square",
  name: msg`Lantern square`,
  slot: "background",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
