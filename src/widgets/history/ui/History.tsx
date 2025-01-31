import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "../styles";
import { WordCard } from "@/src/entities/history";

const words = [
  {
    id: 1,
    initial: "Вкусный",
    result: "Tasty",
  },
  {
    id: 2,
    initial: "Вкусный",
    result: "Tasty",
  },
  {
    id: 3,
    initial: "Вкусный",
    result: "Tasty",
  },
  {
    id: 4,
    initial: "Вкусный",
    result: "Tasty",
  },
  {
    id: 5,
    initial: "Вкусный",
    result: "Tasty",
  },
  {
    id: 6,
    initial: "Вкусный",
    result: "Tasty",
  },
];

export const History: React.FC = () => {
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
      >
        {words.map((word) => (
          <WordCard word={word} key={word.id} />
        ))}
      </ScrollView>
    </View>
  );
};
