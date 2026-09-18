import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "orchard-path",
  name: msg`Orchard path`,
  slot: "background",
  rarity: "common",
} as const satisfies CosmeticMetadata;
