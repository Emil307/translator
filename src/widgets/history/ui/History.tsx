import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "../styles";
import { HistoryWord, storage, WordCard } from "@/src/entities/translator";
import { getStorageData } from "@/src/shared";

export const History: React.FC = () => {
  const [history, setHistory] = useState<HistoryWord[]>([]);

  useEffect(() => {
    getStorageData(storage.HISTORY).then((data) => {
      if (data) {
        setHistory(JSON.parse(data));
      }
    });
  }, []);

  if (history.length === 0 || !history) {
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
