import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "courier-peak-cap",
  name: msg`Courier cap`,
  slot: "hat",
  rarity: "common",
} as const satisfies CosmeticMetadata;
