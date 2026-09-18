import { msg } from "@lingui/core/macro";
import type { MessageDescriptor } from "@lingui/core";

export const RARITY_LABEL = {
  common: msg`Common`,
  uncommon: msg`Uncommon`,
  rare: msg`Rare`,
  epic: msg`Epic`,
  legendary: msg`Legendary`,
} as const satisfies Record<string, MessageDescriptor>;

export const DIFFICULTY_LABEL = {
  easy: msg`Easy`,
  medium: msg`Medium`,
  hard: msg`Hard`,
} as const satisfies Record<string, MessageDescriptor>;
