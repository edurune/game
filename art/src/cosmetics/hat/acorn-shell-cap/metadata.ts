import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "acorn-shell-cap",
  name: msg`Acorn cap`,
  slot: "hat",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
