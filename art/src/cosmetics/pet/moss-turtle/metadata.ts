import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "moss-turtle",
  name: msg`Moss turtle`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
