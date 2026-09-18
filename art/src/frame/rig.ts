import type { ArtRig } from "../types.ts";

export default {
  id: "round-traveler-v1",
  viewBox: [0, 0, 320, 320],
  safeBounds: [16, 16, 304, 304],
  baseline: 282,
  outline: "#303047",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fitRegions: {
    collar: [132, 145, 188, 180],
    companion: [228, 204, 303, 284],
    scene: [18, 18, 302, 302],
  },
  coverageChecks: [
    {
      id: "waist",
      slots: ["top", "full_body"],
      basePlane: "torso",
      region: [124, 196, 196, 234],
    },
  ],
  materialPalette: {
    cream: "#f4eddc",
    sage: "#9bb9a2",
    "sage-shadow": "#758d80",
    "sage-light": "#d5dfb5",
    clay: "#d39b84",
    indigo: "#747da7",
    "indigo-light": "#9b9fbc",
    steel: "#c5cede",
    ochre: "#f2d99b",
    leather: "#bd8b69",
    "leather-light": "#e1bc8b",
  },
  palette: {
    skin: "#e6b18a",
    hair: "#514543",
    eyes: "#303047",
  },
  anchors: {
    root: [160, 282],
    head: [160, 110],
    neck: [160, 155],
    torso: [160, 188],
    hips: [160, 235],
    "shoulder-far": [125, 173],
    "shoulder-near": [195, 173],
    "foot-far": [142, 275],
    "foot-near": [180, 275],
  },
  planes: [
    {
      id: "background",
      anchor: "root",
      slots: ["background"],
    },
    {
      id: "accessory-back",
      anchor: "torso",
      slots: ["accessory", "full_body"],
    },
    {
      id: "hair-back",
      anchor: "head",
      slots: ["hair"],
    },
    {
      id: "top-back",
      anchor: "torso",
      slots: ["top", "full_body"],
    },
    {
      id: "arm-far",
      anchor: "shoulder-far",
      slots: ["base"],
    },
    {
      id: "sleeve-far",
      anchor: "shoulder-far",
      slots: ["top", "full_body"],
    },
    {
      id: "hand-far",
      anchor: "shoulder-far",
      slots: ["base"],
    },
    {
      id: "legs",
      anchor: "hips",
      slots: ["base"],
    },
    {
      id: "bottom",
      anchor: "hips",
      slots: ["bottom", "full_body"],
    },
    {
      id: "shoe-far",
      anchor: "foot-far",
      slots: ["shoes", "full_body"],
    },
    {
      id: "shoe-near",
      anchor: "foot-near",
      slots: ["shoes", "full_body"],
    },
    {
      id: "torso",
      anchor: "torso",
      slots: ["base"],
    },
    {
      id: "top-front",
      anchor: "torso",
      slots: ["top", "full_body"],
    },
    {
      id: "neck",
      anchor: "neck",
      slots: ["base"],
    },
    {
      id: "head",
      anchor: "head",
      slots: ["base"],
    },
    {
      id: "hair-front",
      anchor: "head",
      slots: ["hair"],
    },
    {
      id: "arm-near",
      anchor: "shoulder-near",
      slots: ["base"],
    },
    {
      id: "sleeve-near",
      anchor: "shoulder-near",
      slots: ["top", "full_body"],
    },
    {
      id: "hand-near",
      anchor: "shoulder-near",
      slots: ["base"],
    },
    {
      id: "accessory-front",
      anchor: "torso",
      slots: ["accessory", "full_body"],
    },
    {
      id: "hat",
      anchor: "head",
      slots: ["hat", "full_body"],
    },
    {
      id: "pet",
      anchor: "root",
      slots: ["pet"],
    },
  ],
  poses: {
    rest: {},
    reach: {
      "shoulder-near": -32,
      "shoulder-far": 12,
    },
    swing: {
      "shoulder-near": 22,
      "shoulder-far": -22,
    },
  },
} as const satisfies ArtRig;
