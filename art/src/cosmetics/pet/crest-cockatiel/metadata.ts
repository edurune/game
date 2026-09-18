import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "crest-cockatiel",
  name: msg`Crested cockatiel`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
