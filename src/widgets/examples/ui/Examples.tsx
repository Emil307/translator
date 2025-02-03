import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";

export const Examples: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Примеры</Text>
      <View style={styles.examples}></View>
    </View>
  );
};
