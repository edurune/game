import angledPixie from "./angled-pixie/metadata.ts";
import centerPart from "./center-part/metadata.ts";
import closeBuzz from "./close-buzz/metadata.ts";
import coilyCrown from "./coily-crown/metadata.ts";
import crewCut from "./crew-cut/metadata.ts";
import curvedBob from "./curved-bob/metadata.ts";
import highPonytail from "./high-ponytail/metadata.ts";
import longRibbonCut from "./long-ribbon-cut/metadata.ts";
import loopBraid from "./loop-braid/metadata.ts";
import looseWaves from "./loose-waves/metadata.ts";
import neatSidePart from "./neat-side-part/metadata.ts";
import roundedCurls from "./rounded-curls/metadata.ts";
import shoulderLocs from "./shoulder-locs/metadata.ts";
import sidePonytail from "./side-ponytail/metadata.ts";
import softCrop from "./soft-crop/metadata.ts";
import sweptWave from "./swept-wave/metadata.ts";
import taperedCoils from "./tapered-coils/metadata.ts";
import texturedCrop from "./textured-crop/metadata.ts";
import tuckedBun from "./tucked-bun/metadata.ts";
import twinPuffs from "./twin-puffs/metadata.ts";

export const hairstyles = [
  angledPixie,
  centerPart,
  closeBuzz,
  coilyCrown,
  crewCut,
  curvedBob,
  highPonytail,
  longRibbonCut,
  loopBraid,
  looseWaves,
  neatSidePart,
  roundedCurls,
  shoulderLocs,
  sidePonytail,
  softCrop,
  sweptWave,
  taperedCoils,
  texturedCrop,
  tuckedBun,
  twinPuffs,
] as const;

export type Hairstyle = (typeof hairstyles)[number];
export type HairstyleId = Hairstyle["id"];
