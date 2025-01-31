import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

export type word = {
  id: number;
  initial: string;
  result: string;
};

interface WordCardProps {
  word: word;
}

export const WordCard: React.FC<WordCardProps> = ({ word }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.key} numberOfLines={1} ellipsizeMode="tail">
        {word.result}
      </Text>
      <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">
        {word.initial}
      </Text>
    </View>
  );
};
