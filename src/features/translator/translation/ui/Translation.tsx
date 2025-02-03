import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "../styles";
import { language } from "@/src/entities/translator";
import { textToSpeech } from "@/src/shared";
import { Audio } from "expo-av";
import { API_URL } from "@env";
import { Sound } from "expo-av/build/Audio";

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
  const [sounds, setSounds] = useState<Sound[]>([]);

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

  const playSound = async () => {
    if (sounds.length > 0) {
      await Promise.all(sounds.map((sound) => sound.stopAsync()));
      setSounds([]);
      return;
    }

    const { sound } = await Audio.Sound.createAsync(
      { uri: `${API_URL}${audioUri}` },
      { shouldPlay: true }
    );

    setSounds((prevSounds) => [...prevSounds, sound]);
  };

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
        {isLoading && <Text>loading...</Text>}
        {!isLoading && !error && (
          <TouchableOpacity onPress={playSound}>
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
