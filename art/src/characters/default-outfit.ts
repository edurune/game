import top from "../cosmetics/top/cream-pocket-tee/metadata.ts";
import bottom from "../cosmetics/bottom/straight-leg-chinos/metadata.ts";
import shoes from "../cosmetics/shoes/canvas-lace-shoes/metadata.ts";
import type { Cosmetic } from "../cosmetics/index.ts";

export default {
  top: top.id,
  bottom: bottom.id,
  shoes: shoes.id,
  hat: null,
  accessory: null,
  full_body: null,
  pet: null,
  background: null,
} as const satisfies {
  [Slot in Cosmetic["slot"]]: Extract<Cosmetic, { slot: Slot }>["id"] | null;
};
