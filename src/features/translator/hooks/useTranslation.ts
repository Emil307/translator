import { useState } from "react";
import {
  HistoryWord,
  storage,
  translate,
  TranslateRequestDto,
} from "@/src/entities/translator";
import axios, { CancelTokenSource } from "axios";
import { getStorageData, saveStorageData } from "@/src/shared";

export const useTranslation = () => {
  const [initialText, setInitialText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  function handleTranslate(
    translateRequest: TranslateRequestDto,
    cancelToken: CancelTokenSource
  ) {
    translate(translateRequest, cancelToken)
      .then((res) => {
        const newWord = {
          id: new Date(),
          initial: res.data.initial,
          translation: res.data.translation,
        };
        getStorageData(storage.HISTORY).then((data) => {
          if (!data) {
            saveStorageData(storage.HISTORY, JSON.stringify([newWord]));
          }
          if (data) {
            saveStorageData(
              storage.HISTORY,
              JSON.stringify([newWord, ...JSON.parse(data)])
            );
          }
        });

        setTranslatedText(res.data.translation);
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
    setIsTranslating,
    setInitialText,
    setTranslatedText,
    handleTranslate,
  };
};
