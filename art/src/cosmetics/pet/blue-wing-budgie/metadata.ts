import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "blue-wing-budgie",
  name: msg`Blue-wing budgie`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
