import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { language, TranslateRequestDto } from "@/src/entities/translator";
import { CancelTokenSource } from "axios";

interface ChangeLanguageProps {
  initialLanguage: language;
  setInitialLanguage: (language: language) => void;
  translationLanguage: language;
  setTranslationLanguage: (language: language) => void;
  handleTranslate: (
    translateRequest: TranslateRequestDto,
    cancelToken: CancelTokenSource
  ) => void;
  textToTranslate: string;
  cancelToken: CancelTokenSource;
}

export const ChangeLanguage: React.FC<ChangeLanguageProps> = ({
  initialLanguage,
  textToTranslate,
  translationLanguage,
  cancelToken,
  setInitialLanguage,
  setTranslationLanguage,
  handleTranslate,
}) => {
  function handleChangeLanguage() {
    const initialLanguageCached = initialLanguage;

    setInitialLanguage(translationLanguage);
    setTranslationLanguage(initialLanguageCached);
  }

  useEffect(() => {
    if (textToTranslate.length > 0) {
      const translateRequest: TranslateRequestDto = {
        source_lang: initialLanguage,
        target_lang: translationLanguage,
        text: textToTranslate,
      };

      handleTranslate(translateRequest, cancelToken);
    }
  }, [initialLanguage]);

  return (
    <View style={styles.header}>
      <Text style={styles.language}>
        {initialLanguage === language.RU ? <>русский</> : <>английский</>}
      </Text>
      <TouchableOpacity onPress={handleChangeLanguage}>
        <Image
          style={styles.arrow}
          source={require("@/assets/images/translator-arrow.png")}
        />
      </TouchableOpacity>
      <Text style={styles.language}>
        {translationLanguage === language.EN ? <>английский</> : <>русский</>}
      </Text>
    </View>
  );
};
