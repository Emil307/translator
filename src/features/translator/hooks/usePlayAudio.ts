import { useState } from "react";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import { API_URL } from "@env";

export const usePlayAudio = () => {
  const [sounds, setSounds] = useState<Sound[]>([]);

  const playSound = async (audioUri: string) => {
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

  return {
    playSound,
  };
};
