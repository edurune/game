import acornling from "./acornling/metadata.ts";
import ashHound from "./ash-hound/metadata.ts";
import cactusSentry from "./cactus-sentry/metadata.ts";
import capling from "./capling/metadata.ts";
import caveBat from "./cave-bat/metadata.ts";
import cloudling from "./cloudling/metadata.ts";
import crystalBeetle from "./crystal-beetle/metadata.ts";
import crystalGolem from "./crystal-golem/metadata.ts";
import duneScorpion from "./dune-scorpion/metadata.ts";
import emberImp from "./ember-imp/metadata.ts";
import frostWolf from "./frost-wolf/metadata.ts";
import groveGuardian from "./grove-guardian/metadata.ts";
import lanternJellyfish from "./lantern-jellyfish/metadata.ts";
import lavaDrake from "./lava-drake/metadata.ts";
import lavaSlug from "./lava-slug/metadata.ts";
import mossSlime from "./moss-slime/metadata.ts";
import penguinGuard from "./penguin-guard/metadata.ts";
import reefSerpent from "./reef-serpent/metadata.ts";
import rockling from "./rockling/metadata.ts";
import ruinMimic from "./ruin-mimic/metadata.ts";
import ruinWisp from "./ruin-wisp/metadata.ts";
import sandCrab from "./sand-crab/metadata.ts";
import sandSpirit from "./sand-spirit/metadata.ts";
import sandWyrm from "./sand-wyrm/metadata.ts";
import snowPuff from "./snow-puff/metadata.ts";
import snowYeti from "./snow-yeti/metadata.ts";
import stoneSentinel from "./stone-sentinel/metadata.ts";
import stormBird from "./storm-bird/metadata.ts";
import thunderRoc from "./thunder-roc/metadata.ts";
import tideTitan from "./tide-titan/metadata.ts";
import walkingArmor from "./walking-armor/metadata.ts";
import windSprite from "./wind-sprite/metadata.ts";

export const enemies = [
  acornling,
  ashHound,
  cactusSentry,
  capling,
  caveBat,
  cloudling,
  crystalBeetle,
  crystalGolem,
  duneScorpion,
  emberImp,
  frostWolf,
  groveGuardian,
  lanternJellyfish,
  lavaDrake,
  lavaSlug,
  mossSlime,
  penguinGuard,
  reefSerpent,
  rockling,
  ruinMimic,
  ruinWisp,
  sandCrab,
  sandSpirit,
  sandWyrm,
  snowPuff,
  snowYeti,
  stoneSentinel,
  stormBird,
  thunderRoc,
  tideTitan,
  walkingArmor,
  windSprite,
] as const;

export type Enemy = (typeof enemies)[number];
export type EnemyId = Enemy["id"];
