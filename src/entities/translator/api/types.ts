export enum language {
  RU = "ru",
  EN = "en",
}

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
  translation: string;
  pof: string;
  alternatives: TAlternative[];
  examples: TExample[];
}
