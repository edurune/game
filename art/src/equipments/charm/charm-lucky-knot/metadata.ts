import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-lucky-knot",
  name: msg`Lucky knot`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
