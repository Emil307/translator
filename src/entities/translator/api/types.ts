type TAlternative = {
  words: string[];
  translation: string;
};

type TExample = {
  source: string;
  target: string;
};

export interface TranslateRequestDto {
  source_lang: string;
  target_lang: string;
  text: string;
}

export interface TranslateResponseDto {
  translation: string;
  pof: string;
  alternatives: TAlternative[];
  examples: TExample[];
}
