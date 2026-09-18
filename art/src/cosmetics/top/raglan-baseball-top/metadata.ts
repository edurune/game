import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "raglan-baseball-top",
  name: msg`Raglan baseball shirt`,
  slot: "top",
  rarity: "common",
} as const satisfies CosmeticMetadata;
