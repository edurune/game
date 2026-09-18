import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "soft-felt-beret",
  name: msg`Felt beret`,
  slot: "hat",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
