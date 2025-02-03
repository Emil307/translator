import React, { useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "../styles";
import { HistoryWord, WordCard } from "@/src/entities/translator";

interface HistoryProps {
  history: HistoryWord[];
  handleGetHistory: () => void;
}

export const History: React.FC<HistoryProps> = ({
  history,
  handleGetHistory,
}) => {
  useEffect(() => {
    handleGetHistory();
  }, []);

  if (history.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>История переводов</Text>
        <Image
          style={styles.arrow}
          source={require("@/assets/images/arrow.png")}
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.words}
        keyboardShouldPersistTaps="handled"
      >
        {history.map((word) => (
          <WordCard word={word} key={word.id} />
        ))}
      </ScrollView>
    </View>
  );
};
