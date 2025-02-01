import * as Speech from "expo-speech";
import { language } from "@/src/entities/translator";

export const usePlayAudio = () => {
  const speakText = (textToSpeak: string, language: language) => {
    console.log(textToSpeak, language);
    Speech.speak(textToSpeak);
  };

  return {
    speakText,
  };
};
