export enum language {
  RU = "ru",
  EN = "en",
}

export enum storage {
  HISTORY = "history",
}

export type HistoryWord = {
  id: number;
  initial: string;
  translation: string;
};

export type TFrom = "input" | "history";

export type TExample = {
  source: string;
  target: string;
};
