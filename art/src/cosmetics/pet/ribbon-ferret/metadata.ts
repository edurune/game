import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "ribbon-ferret",
  name: msg`Ribbon ferret`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
