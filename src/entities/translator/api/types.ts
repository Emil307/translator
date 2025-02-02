import { language } from "../types";

type TAlternative = {
  words: string[];
  translation: string;
};

type TExample = {
  source: string;
  target: string;
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

export interface ExamplesResponseDto {
  examples: TExample[];
}
