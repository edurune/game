import skill0 from "./skill-strike/metadata.ts";
import skill1 from "./skill-lunge/metadata.ts";
import skill2 from "./skill-crush/metadata.ts";
import skill3 from "./skill-sweep/metadata.ts";
import skill4 from "./skill-barrage/metadata.ts";
import skill5 from "./skill-rend/metadata.ts";
import skill6 from "./skill-slowing-shot/metadata.ts";
import skill7 from "./skill-frost/metadata.ts";
import skill8 from "./skill-disarm/metadata.ts";
import skill9 from "./skill-flurry/metadata.ts";
import skill10 from "./skill-power-strike/metadata.ts";
import skill11 from "./skill-nova/metadata.ts";
import skill12 from "./skill-mend/metadata.ts";
import skill13 from "./skill-healing-song/metadata.ts";
import skill14 from "./skill-rally/metadata.ts";
import skill15 from "./skill-warding-song/metadata.ts";
import skill16 from "./skill-renewal/metadata.ts";
import skill17 from "./skill-ruin/metadata.ts";
import skill18 from "./skill-awaken/metadata.ts";
import skill19 from "./skill-sunder/metadata.ts";
import skill20 from "./skill-brace/metadata.ts";
import skill21 from "./skill-fortify/metadata.ts";
import skill22 from "./skill-quickstep/metadata.ts";
import skill23 from "./skill-recover/metadata.ts";
import skill24 from "./skill-bulwark/metadata.ts";
import skill25 from "./skill-regroup/metadata.ts";
import skill26 from "./skill-vigor/metadata.ts";
import skill27 from "./skill-iron-will/metadata.ts";
import skill28 from "./skill-windstep/metadata.ts";
import skill29 from "./skill-sanctuary/metadata.ts";
import skill30 from "./skill-first-aid/metadata.ts";
import skill31 from "./skill-focus/metadata.ts";
import skill32 from "./skill-ward/metadata.ts";
import skill33 from "./skill-haste/metadata.ts";
import skill34 from "./skill-courage/metadata.ts";
import skill35 from "./skill-soothe/metadata.ts";
import skill36 from "./skill-impede/metadata.ts";
import skill37 from "./skill-expose/metadata.ts";
import skill38 from "./skill-weaken/metadata.ts";
import skill39 from "./skill-revitalize/metadata.ts";
import skill40 from "./skill-aegis/metadata.ts";
import skill41 from "./skill-resolve/metadata.ts";
import skill42 from "./skill-surge/metadata.ts";
import skill43 from "./skill-bite/metadata.ts";
import skill44 from "./skill-slam/metadata.ts";
import skill45 from "./skill-shell-guard/metadata.ts";
import skill46 from "./skill-spore-cloud/metadata.ts";
import skill47 from "./skill-regrowth/metadata.ts";
import skill48 from "./skill-mending-rain/metadata.ts";
import skill49 from "./skill-constrict/metadata.ts";
import skill50 from "./skill-shock/metadata.ts";
import skill51 from "./skill-tail-sweep/metadata.ts";
import skill52 from "./skill-shard-burst/metadata.ts";
import skill53 from "./skill-sand-blast/metadata.ts";
import skill54 from "./skill-sting/metadata.ts";
import skill55 from "./skill-frost-breath/metadata.ts";
import skill56 from "./skill-pounce/metadata.ts";
import skill57 from "./skill-ember-burst/metadata.ts";
import skill58 from "./skill-gust/metadata.ts";
import skill59 from "./skill-thunderclap/metadata.ts";
import skill60 from "./skill-molten-shell/metadata.ts";

export const skills = [
  skill0,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  skill9,
  skill10,
  skill11,
  skill12,
  skill13,
  skill14,
  skill15,
  skill16,
  skill17,
  skill18,
  skill19,
  skill20,
  skill21,
  skill22,
  skill23,
  skill24,
  skill25,
  skill26,
  skill27,
  skill28,
  skill29,
  skill30,
  skill31,
  skill32,
  skill33,
  skill34,
  skill35,
  skill36,
  skill37,
  skill38,
  skill39,
  skill40,
  skill41,
  skill42,
  skill43,
  skill44,
  skill45,
  skill46,
  skill47,
  skill48,
  skill49,
  skill50,
  skill51,
  skill52,
  skill53,
  skill54,
  skill55,
  skill56,
  skill57,
  skill58,
  skill59,
  skill60,
] as const;
export type SkillMetadata = (typeof skills)[number];
export type SkillId = SkillMetadata["id"];
