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
      <Text style={styles.key}>{word.result}</Text>
      <Text style={styles.value}>{word.initial}</Text>
    </View>
  );
};
