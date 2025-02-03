import { useState } from "react";
import {
  HistoryWord,
  storage,
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
  const [history, setHistory] = useState<HistoryWord[]>([]);
  const [from, setFrom] = useState<TFrom>("input");

  function handleGetHistory() {
    getStorageData(storage.HISTORY).then((data) => {
      if (data) {
        setHistory(JSON.parse(data));
      }
    });
  }

  function handleTranslate(
    translateRequest: TranslateRequestDto,
    cancelToken: CancelTokenSource
  ) {
    translate(translateRequest, cancelToken)
      .then((res) => {
        setTranslatedText(res.data.translation);

        const newWord = {
          id: new Date(),
          initial: res.data.initial,
          translation: res.data.translation,
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
      });
  }

  return {
    initialText,
    translatedText,
    isTranslating,
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
