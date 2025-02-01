import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
import { useRecording } from "@/src/features/translator";
import { useDebounce } from "@/src/shared";
import { translate } from "@/src/entities/translator/api";
import { language, TranslateRequestDto } from "@/src/entities/translator";
import { Translation } from "@/src/features/translator";

export const Translator: React.FC = () => {
  const [initialText, setInitialText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const { isRecording, audioUri, startRecording, stopRecording } =
    useRecording();

  const debouncedInitialText = useDebounce(initialText, 500);

  useEffect(() => {
    if (typeof debouncedInitialText === "string") {
      setIsTranslating(true);

      const translateRequest: TranslateRequestDto = {
        source_lang: language.RU,
        target_lang: language.EN,
        text: initialText,
      };

      translate(translateRequest)
        .then((res) => {
          setTranslatedText(res.data.translation);
        })
        .catch((e) => {
          alert(e);
        })
        .finally(() => {
          setIsTranslating(false);
        });
    }
  }, [debouncedInitialText]);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.language}>русский</Text>
          <Image
            style={styles.arrow}
            source={require("@/assets/images/translator-arrow.png")}
          />
          <Text style={styles.language}>английский</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.initial}>
            <View style={styles.top}>
              <TextInput
                style={styles.input}
                placeholder="Начните писать текст"
                multiline
                defaultValue={initialText}
                onChangeText={(text) => setInitialText(text)}
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
          {translatedText && !isTranslating && (
            <Translation translation={translatedText} language={language.EN} />
          )}
          {isTranslating && <Text>Загрузка...</Text>}
        </View>
      </View>
    </View>
  );
};
