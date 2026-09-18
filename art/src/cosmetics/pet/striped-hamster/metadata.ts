import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "striped-hamster",
  name: msg`Striped hamster`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
