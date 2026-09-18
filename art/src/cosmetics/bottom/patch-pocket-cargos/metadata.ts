import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "patch-pocket-cargos",
  name: msg`Patch-pocket cargos`,
  slot: "bottom",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
