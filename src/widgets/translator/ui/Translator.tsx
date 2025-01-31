import React, { useState } from "react";
import { styles } from "../styles";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";

export const Translator: React.FC = () => {
  const [initialText, setInitialText] = useState("");
  const [isRecording, setIsRecording] = useState(false);

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
              <TouchableOpacity onPress={() => setIsRecording(true)}>
                <Image
                  style={styles.recordImage}
                  source={require("@/assets/images/record.png")}
                />
              </TouchableOpacity>
            )}
            {isRecording && (
              <TouchableOpacity
                onPress={() => setIsRecording(false)}
                style={styles.recordingButton}
              ></TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
