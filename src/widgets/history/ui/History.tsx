import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { HistoryWord, TFrom, WordCard } from "@/src/entities/translator";

interface HistoryProps {
  history: HistoryWord[];
  from: TFrom;
  handleGetHistory: () => void;
  setInitialText: (text: string) => void;
  setTranslatedText: (text: string) => void;
  setFrom: (from: TFrom) => void;
}

export const History: React.FC<HistoryProps> = ({
  from,
  history,
  handleGetHistory,
  setInitialText,
  setTranslatedText,
  setFrom,
}) => {
  useEffect(() => {
    handleGetHistory();
  }, []);

  function handleClick(initialText: string, translatedText: string) {
    if (from !== "history") {
      setFrom("history");
    }
    setInitialText(initialText);
    setTranslatedText(translatedText);
  }

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
          <TouchableOpacity
            onPress={() => handleClick(word.initial, word.translation)}
            key={word.id}
          >
            <WordCard word={word} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
