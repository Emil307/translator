import { useState } from "react";
import { translate, TranslateRequestDto } from "@/src/entities/translator";
import axios, { CancelTokenSource } from "axios";

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
