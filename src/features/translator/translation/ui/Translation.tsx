import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "../styles";
import { language } from "@/src/entities/translator";
import { textToSpeech } from "@/src/shared";
import { usePlayAudio } from "../../hooks";
import LottieView from "lottie-react-native";

interface TranslationProps {
  translation: string;
  language: language;
}

export const Translation: React.FC<TranslationProps> = ({
  translation,
  language,
}) => {
  const [audioUri, setAudioUri] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const animation = useRef<LottieView>(null);

  const { playSound } = usePlayAudio();

  useEffect(() => {
    setIsLoading(true);
    textToSpeech({ text: translation, lang: language })
      .then((res) => {
        setAudioUri(res.data.url);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [translation]);

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            ...styles.text,
            fontSize: translation.length > 150 ? 16 : 20,
            lineHeight: translation.length > 150 ? 18 : 22,
          }}
        >
          {translation}
        </Text>
      </View>
      <View>
        {isLoading && (
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 32,
              height: 32,
            }}
            source={require("@/assets/lottie/loader-white.json")}
          />
        )}
        {!isLoading && audioUri && (
          <TouchableOpacity onPress={() => playSound(audioUri)}>
            <Image
              source={require("@/assets/images/play-sound.png")}
              style={styles.play}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
