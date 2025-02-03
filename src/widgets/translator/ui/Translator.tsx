import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
import {
  ChangeLanguage,
  usePlayAudio,
  useRecording,
} from "@/src/features/translator";
import { textToSpeech, useDebounce } from "@/src/shared";
import {
  language,
  TFrom,
  TranslateRequestDto,
} from "@/src/entities/translator";
import { Translation } from "@/src/features/translator";
import axios, { CancelTokenSource } from "axios";
import LottieView from "lottie-react-native";

interface TranslatorProps {
  initialText: string;
  translatedText: string;
  isTranslating: boolean;
  from?: TFrom;
  setInitialText: (text: string) => void;
  setTranslatedText: (text: string) => void;
  setIsTranslating: (value: boolean) => void;
  handleTranslate: (
    translateRequest: TranslateRequestDto,
    token: CancelTokenSource
  ) => void;
  setFrom: (from: TFrom) => void;
}

export const Translator: React.FC<TranslatorProps> = ({
  initialText,
  translatedText,
  isTranslating,
  from = "input",
  setInitialText,
  setTranslatedText,
  setIsTranslating,
  handleTranslate,
  setFrom,
}) => {
  const [initialLanguage, setInitialLanguage] = useState<language>(language.RU);
  const [translationLanguage, setTranslationLanguage] = useState<language>(
    language.EN
  );
  const { isRecording, audioUri, startRecording, stopRecording } =
    useRecording();

  const [cancelToken, setCancelToken] = useState<CancelTokenSource | null>(
    null
  );
  const [ttsUri, setTTSUri] = useState("");
  const [isLoadingTTS, setIsLoadingTTS] = useState(false);
  const [error, setError] = useState(null);
  const animation = useRef<LottieView>(null);

  const { playSound } = usePlayAudio();

  const debouncedInitialText = useDebounce(initialText, 500);

  function handleGetTTS() {
    setIsLoadingTTS(true);
    textToSpeech({ text: initialText, lang: initialLanguage })
      .then((res) => {
        setTTSUri(res.data.url);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setIsLoadingTTS(false);
      });
  }

  useEffect(() => {
    if (!debouncedInitialText) {
      setInitialText("");
      setTranslatedText("");
      return;
    }
    if (typeof debouncedInitialText === "string") {
      if (from === "input") {
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

      handleGetTTS();
    }
  }, [debouncedInitialText]);

  const cancelRequests = () => {
    if (cancelToken) {
      cancelToken.cancel("Операция отменена");
    }
  };

  function handleInputText(text: string) {
    if (from !== "input") {
      setFrom("input");
    }
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
          from={from}
          setInitialLanguage={setInitialLanguage}
          setTranslationLanguage={setTranslationLanguage}
          setInitialText={setInitialText}
          handleTranslate={handleTranslate}
          setFrom={setFrom}
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
                placeholder={isRecording ? "Говорите" : "Начните писать текст"}
                multiline
                defaultValue={initialText}
                onChangeText={(text) => handleInputText(text)}
              />
              {!initialText && (
                <TouchableOpacity
                  onPress={() => Clipboard.setStringAsync(initialText)}
                >
                  <Image
                    style={styles.copyImage}
                    source={require("@/assets/images/copy.png")}
                  />
                </TouchableOpacity>
              )}
              {initialText && (
                <TouchableOpacity onPress={() => setInitialText("")}>
                  <Image
                    style={styles.copyImage}
                    source={require("@/assets/images/close.png")}
                  />
                </TouchableOpacity>
              )}
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
                >
                  <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                      width: 38,
                      height: 38,
                    }}
                    source={require("@/assets/lottie/recording.json")}
                  />
                </TouchableOpacity>
              )}
              <View>
                {isLoadingTTS && <Text>loading...</Text>}
                {!isLoadingTTS && !error && initialText && (
                  <TouchableOpacity onPress={() => playSound(ttsUri)}>
                    <Image
                      source={require("@/assets/images/play-sound.png")}
                      style={styles.play}
                    />
                  </TouchableOpacity>
                )}
              </View>
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
