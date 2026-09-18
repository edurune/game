import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "cream-crew-tank",
  name: msg`Cream tank top`,
  slot: "top",
  rarity: "common",
} as const satisfies CosmeticMetadata;
