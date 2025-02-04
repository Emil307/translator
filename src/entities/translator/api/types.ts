import { language, TExample } from "../types";

type TAlternative = {
  words: string[];
  translation: string;
};

export interface TranslateRequestDto {
  source_lang: language;
  target_lang: language;
  text: string;
}

export interface TranslateResponseDto {
  initial: string;
  translation: string;
}

export interface AlternativesResponseDto {
  pof: string;
  alternatives: TAlternative[];
}

export type ExamplesResponseDto = TExample[];
