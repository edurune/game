import { compose } from "../../compose.ts";
import frame from "../../frame/shop.ts";
import type { ArtItem, ArtRig } from "../../types.ts";

/** Fits a cosmetic into the curtained opening, behind the shop's frame and floor. */
export function composeShopScene(
  rig: ArtRig,
  shop: ArtItem,
  background?: ArtItem,
  instance = "shop",
) {
  if (!background) return compose(rig, [shop], [shop.id], { instance });
  if (background.slot !== "background") throw new Error("Choose a background for the shop");
  const [left, top, right, bottom] = frame.opening;
  const [x, y, x2, y2] = frame.background;
  const scale = Math.max((right - left) / (x2 - x), (bottom - top) / (y2 - y));
  const offsetX = left + (right - left - (x2 - x) * scale) / 2 - x * scale;
  const offsetY = top + (bottom - top - (y2 - y) * scale) / 2 - y * scale;
  const inset = `<g transform="translate(${offsetX} ${offsetY}) scale(${scale})">${background.parts.map((part) => part.markup).join("")}</g>`;
  const marker = /(<g\b[^>]*\bid="shop--fitting-background"[^>]*)(?:\/>|><\/g>)/;
  if (!shop.parts.some((part) => marker.test(part.markup)))
    throw new Error("Shop artwork is missing its fitting-room opening");
  const scene = {
    ...shop,
    defs: shop.defs + background.defs,
    parts: shop.parts.map((part) => ({
      ...part,
      markup: part.markup.replace(marker, `$1>${inset}</g>`),
    })),
  };
  return compose(rig, [scene], [scene.id], { instance });
}
