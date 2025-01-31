import React from "react";
import { styles } from "../styles";
import { Text, View } from "react-native";

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>переводчик</Text>
    </View>
  );
};
