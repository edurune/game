import type { ArtItem, ArtRig } from "../types.ts";
import { compose } from "../compose.ts";

/** Render validated artwork; size and theme never alter its authored geometry. */
export function composeCombatIcon(
  rig: ArtRig,
  item: ArtItem,
  {
    size = 32,
    theme = "light",
    instance = "combat-icon",
  }: { size?: 24 | 32 | 48 | 64; theme?: "light" | "dark"; instance?: string } = {},
) {
  if (rig.id !== "combat-ui-icon-v1" || !rig.reviewSizes?.includes(size))
    throw new Error("Unsupported combat icon size");
  if (!["light", "dark"].includes(theme) || !/^#[0-9a-f]{6}$/i.test(rig.darkOutline ?? ""))
    throw new Error("Unsupported combat icon theme");
  let svg = compose(rig, [item], [item.id], { instance }).replace(
    'width="32" height="32"',
    `width="${size}" height="${size}"`,
  );
  if (theme === "dark")
    svg = svg.replaceAll(`stroke="${rig.outline}"`, `stroke="${rig.darkOutline}"`);
  return svg;
}
