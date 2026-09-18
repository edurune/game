import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "acorn-squirrel",
  name: msg`Acorn squirrel`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
