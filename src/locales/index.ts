import { pt } from "./pt";
import { en } from "./en";
import type { Dictionary, Language } from "./types";

export const dictionaries: Record<Language, Dictionary> = { pt, en };

export type { Dictionary, Language } from "./types";
