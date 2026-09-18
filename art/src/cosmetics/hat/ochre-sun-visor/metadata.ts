import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "ochre-sun-visor",
  name: msg`Ochre sun visor`,
  slot: "hat",
  rarity: "common",
} as const satisfies CosmeticMetadata;
