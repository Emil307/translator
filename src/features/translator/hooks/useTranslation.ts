import { useState } from "react";
import {
  getExamples,
  HistoryWord,
  storage,
  TExample,
  TFrom,
  translate,
  TranslateRequestDto,
} from "@/src/entities/translator";
import axios, { CancelTokenSource } from "axios";
import { getStorageData, saveStorageData } from "@/src/shared";

export const useTranslation = () => {
  const [initialText, setInitialText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [examples, setExamples] = useState<TExample[]>([]);
  const [isLoadingExamples, setIsLoadingExamples] = useState(false);
  const [history, setHistory] = useState<HistoryWord[]>([]);
  const [from, setFrom] = useState<TFrom>("input");

  function handleGetHistory() {
    getStorageData(storage.HISTORY).then((data) => {
      if (data) {
        setHistory(JSON.parse(data));
      }
    });
  }

  function saveHistory(initial: string, translation: string) {
    const newWord = {
      id: new Date(),
      initial: initial,
      translation: translation,
    };

    getStorageData(storage.HISTORY)
      .then((data) => {
        if (!data) {
          saveStorageData(storage.HISTORY, JSON.stringify([newWord]));
          return;
        }

        saveStorageData(
          storage.HISTORY,
          JSON.stringify([newWord, ...JSON.parse(data)])
        );
      })
      .finally(() => {
        handleGetHistory();
      });
  }

  function handleGetExamples(translateRequest: TranslateRequestDto) {
    setIsLoadingExamples(true);
    getExamples(translateRequest)
      .then((res) => {
        setExamples(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoadingExamples(false);
      });
  }

  function handleTranslate(
    translateRequest: TranslateRequestDto,
    cancelToken: CancelTokenSource
  ) {
    translate(translateRequest, cancelToken)
      .then((res) => {
        setTranslatedText(res.data.translation);
        saveHistory(res.data.initial, res.data.translation);
        handleGetExamples(translateRequest);
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return;
        } else {
          alert(e);
        }
      })
      .finally(() => {
        setIsTranslating(false);
        setIsLoadingExamples(false);
      });
  }

  return {
    initialText,
    translatedText,
    isTranslating,
    examples,
    isLoadingExamples,
    history,
    from,
    setIsTranslating,
    setInitialText,
    setTranslatedText,
    handleTranslate,
    handleGetHistory,
    setFrom,
  };
};
