import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "indigo-racer-tank",
  name: msg`Indigo racer tank`,
  slot: "top",
  rarity: "common",
} as const satisfies CosmeticMetadata;
