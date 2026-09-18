import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "dune-lizard",
  name: msg`Dune lizard`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
