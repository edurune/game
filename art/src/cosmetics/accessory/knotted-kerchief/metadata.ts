import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "knotted-kerchief",
  name: msg`Knotted neckerchief`,
  slot: "accessory",
  rarity: "common",
} as const satisfies CosmeticMetadata;
