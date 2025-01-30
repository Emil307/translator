import React from "react";
import { styles } from "../styles";
import { View, Image, Text } from "react-native";

export const Translator: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.language}>русский</Text>
        <Image
          style={styles.arrow}
          source={require("@/assets/images/translator-arrow.png")}
        />
        <Text style={styles.language}>английский</Text>
      </View>
      <Text>Translator</Text>
    </View>
  );
};
