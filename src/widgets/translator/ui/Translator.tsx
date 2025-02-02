import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
import {
  ChangeLanguage,
  useRecording,
  useTranslation,
} from "@/src/features/translator";
import { $api, useDebounce } from "@/src/shared";
import { language, TranslateRequestDto } from "@/src/entities/translator";
import { Translation } from "@/src/features/translator";
import axios, { CancelTokenSource } from "axios";

export const Translator: React.FC = () => {
  const [initialLanguage, setInitialLanguage] = useState<language>(language.RU);
  const [translationLanguage, setTranslationLanguage] = useState<language>(
    language.EN
  );
  const {
    initialText,
    translatedText,
    isTranslating,
    setInitialText,
    setTranslatedText,
    setIsTranslating,
    handleTranslate,
  } = useTranslation();
  const { isRecording, audioUri, startRecording, stopRecording } =
    useRecording();

  const [cancelToken, setCancelToken] = useState<CancelTokenSource | null>(
    null
  );

  const debouncedInitialText = useDebounce(initialText, 500);

  useEffect(() => {
    if (!debouncedInitialText) {
      setInitialText("");
      setTranslatedText("");
      return;
    }
    if (typeof debouncedInitialText === "string") {
      setIsTranslating(true);

      const source = axios.CancelToken.source();
      setCancelToken(source);

      const translateRequest: TranslateRequestDto = {
        source_lang: initialLanguage,
        target_lang: translationLanguage,
        text: debouncedInitialText,
      };

      handleTranslate(translateRequest, source);
    }
  }, [debouncedInitialText]);

  const cancelRequests = () => {
    if (cancelToken) {
      cancelToken.cancel("Операция отменена");
    }
  };

  function handleInputText(text: string) {
    setInitialText(text);
    cancelRequests();
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ChangeLanguage
          initialLanguage={initialLanguage}
          translationLanguage={translationLanguage}
          textToTranslate={translatedText}
          cancelToken={cancelToken as any}
          setInitialLanguage={setInitialLanguage}
          setTranslationLanguage={setTranslationLanguage}
          handleTranslate={handleTranslate}
        />

        <View style={styles.wrapper}>
          <View style={styles.initial}>
            <View style={styles.top}>
              <TextInput
                style={{
                  ...styles.input,
                  fontSize: String(initialText).length > 150 ? 16 : 20,
                  lineHeight: String(initialText).length > 150 ? 18 : 22,
                }}
                placeholder="Начните писать текст"
                multiline
                defaultValue={initialText}
                onChangeText={(text) => handleInputText(text)}
              />
              <TouchableOpacity
                onPress={() => Clipboard.setStringAsync(initialText)}
              >
                <Image
                  style={styles.copyImage}
                  source={require("@/assets/images/copy.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
              {!isRecording && (
                <TouchableOpacity onPress={startRecording}>
                  <Image
                    style={styles.recordImage}
                    source={require("@/assets/images/record.png")}
                  />
                </TouchableOpacity>
              )}
              {isRecording && (
                <TouchableOpacity
                  onPress={stopRecording}
                  style={styles.recordingButton}
                ></TouchableOpacity>
              )}
            </View>
          </View>
          {translatedText && (
            <Translation translation={translatedText} language={language.EN} />
          )}
          {isTranslating && <Text>Загрузка...</Text>}
        </View>
      </View>
    </View>
  );
};
