import cloudCourt from "./cloud-court/metadata.ts";
import crystalDepths from "./crystal-depths/metadata.ts";
import duneBasin from "./dune-basin/metadata.ts";
import emberCaldera from "./ember-caldera/metadata.ts";
import forestClearing from "./forest-clearing/metadata.ts";
import frostPass from "./frost-pass/metadata.ts";
import quietRuins from "./quiet-ruins/metadata.ts";
import tidalShore from "./tidal-shore/metadata.ts";

export const regions = [
  cloudCourt,
  crystalDepths,
  duneBasin,
  emberCaldera,
  forestClearing,
  frostPass,
  quietRuins,
  tidalShore,
] as const;

export type Region = (typeof regions)[number];
export type RegionId = Region["id"];
