import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";
import { HistoryWord } from "../../../types";

interface WordCardProps {
  word: HistoryWord;
}

export const WordCard: React.FC<WordCardProps> = ({ word }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.key} numberOfLines={1} ellipsizeMode="tail">
        {word.translation}
      </Text>
      <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">
        {word.initial}
      </Text>
    </View>
  );
};
