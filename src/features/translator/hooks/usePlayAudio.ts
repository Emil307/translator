import { useState } from "react";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

export const usePlayAudio = () => {
  const [sounds, setSounds] = useState<Sound[]>([]);

  const API_URL = process.env.EXPO_PUBLIC_API_URL;

  const playSound = async (audioUri: string) => {
    if (sounds.length > 0) {
      await Promise.all(sounds.map((sound) => sound.stopAsync()));
      setSounds([]);
      return;
    }

    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: `${API_URL}${audioUri}` },
        { shouldPlay: true }
      );

      setSounds((prevSounds) => [...prevSounds, sound]);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    playSound,
  };
};
