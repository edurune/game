import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "ribbed-crew-jumper",
  name: msg`Ribbed crewneck`,
  slot: "top",
  rarity: "common",
} as const satisfies CosmeticMetadata;
