import runeGate from "./rune-gate/metadata.ts";
import carvedWordmark from "./carved-wordmark/metadata.ts";
import runeGateIcon from "./rune-gate-icon/metadata.ts";

export const brands = [runeGate, carvedWordmark, runeGateIcon] as const;

export type Brand = (typeof brands)[number];
export type BrandId = Brand["id"];
