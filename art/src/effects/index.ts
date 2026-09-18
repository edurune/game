import healingMend from "./healing/healing-mend/metadata.ts";
import healingRegeneration from "./healing/healing-regeneration/metadata.ts";
import impactArcane from "./impact/impact-arcane/metadata.ts";
import impactCritical from "./impact/impact-critical/metadata.ts";
import impactDust from "./impact/impact-dust/metadata.ts";
import impactFire from "./impact/impact-fire/metadata.ts";
import impactHit from "./impact/impact-hit/metadata.ts";
import impactIce from "./impact/impact-ice/metadata.ts";
import impactLightning from "./impact/impact-lightning/metadata.ts";
import impactSlash from "./impact/impact-slash/metadata.ts";
import impactWater from "./impact/impact-water/metadata.ts";
import impactWind from "./impact/impact-wind/metadata.ts";
import shieldBreak from "./shield/shield-break/metadata.ts";
import shieldGuard from "./shield/shield-guard/metadata.ts";
import statusBurn from "./status/status-burn/metadata.ts";
import statusFreeze from "./status/status-freeze/metadata.ts";
import statusHaste from "./status/status-haste/metadata.ts";
import statusPoison from "./status/status-poison/metadata.ts";
import statusStun from "./status/status-stun/metadata.ts";
import statusWeakness from "./status/status-weakness/metadata.ts";

export const effects = [
  healingMend,
  healingRegeneration,
  impactArcane,
  impactCritical,
  impactDust,
  impactFire,
  impactHit,
  impactIce,
  impactLightning,
  impactSlash,
  impactWater,
  impactWind,
  shieldBreak,
  shieldGuard,
  statusBurn,
  statusFreeze,
  statusHaste,
  statusPoison,
  statusStun,
  statusWeakness,
] as const;

export type Effect = (typeof effects)[number];
export type EffectId = Effect["id"];
