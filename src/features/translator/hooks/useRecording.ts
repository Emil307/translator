import { useState } from "react";
import { Audio } from "expo-av";

export const useRecording = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);

  const startRecording = async () => {
    try {
      // Устанавливаем режим аудио для записи
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true, // Разрешаем запись на iOS
        playsInSilentModeIOS: true, // Разрешаем воспроизведение в тихом режиме на iOS
      });

      // Запрашиваем разрешение на использование микрофона
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Разрешение на запись аудио не получено!");
        return;
      }

      // Создаем новый объект для записи аудио
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      setIsRecording(true);

      // Начинаем запись
      await recording.startAsync();
    } catch (error) {
      console.error("Ошибка при записи:", error);
    }
  };

  const stopRecording = async () => {
    try {
      if (recording) {
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        setAudioUri(uri);
        setIsRecording(false);
        setRecording(null);
      }
    } catch (error) {
      console.error("Ошибка при остановке записи:", error);
    }
  };

  return {
    isRecording,
    audioUri,
    startRecording,
    stopRecording,
  };
};
