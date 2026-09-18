import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "cloud-sheep",
  name: msg`Cloud sheep`,
  slot: "pet",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
