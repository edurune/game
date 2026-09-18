import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "cloud-terrace",
  name: msg`Cloud terrace`,
  slot: "background",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
