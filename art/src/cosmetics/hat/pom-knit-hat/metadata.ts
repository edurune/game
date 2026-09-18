import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "pom-knit-hat",
  name: msg`Pom-pom beanie`,
  slot: "hat",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
