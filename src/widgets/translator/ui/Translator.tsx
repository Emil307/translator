import React, { useState } from "react";
import { styles } from "../styles";
import { View, Image, Text, TextInput } from "react-native";

export const Translator: React.FC = () => {
  const [initialText, setInitialText] = useState("");

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
            <Image
              style={styles.copyImage}
              source={require("@/assets/images/copy.png")}
            />
            <Image
              style={styles.recordImage}
              source={require("@/assets/images/record.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
