import React, { useState } from "react";
import { styles } from "../styles";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
import { Audio } from "expo-av";

export const Translator: React.FC = () => {
  const [initialText, setInitialText] = useState("");
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
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Начните писать текст"
            multiline
            defaultValue={initialText}
            onChangeText={(text) => setInitialText(text)}
          />
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => Clipboard.setStringAsync(initialText)}
            >
              <Image
                style={styles.copyImage}
                source={require("@/assets/images/copy.png")}
              />
            </TouchableOpacity>
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
      </View>
    </View>
  );
};
