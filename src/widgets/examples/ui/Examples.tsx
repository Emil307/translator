import React, { useRef } from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";
import { TExample } from "@/src/entities/translator";
import LottieView from "lottie-react-native";

interface ExamplesProps {
  examples: TExample[];
  isLoadingExamples: boolean;
}

export const Examples: React.FC<ExamplesProps> = ({
  examples,
  isLoadingExamples,
}) => {
  const animation = useRef<LottieView>(null);

  if (examples.length === 0) {
    return null;
  }

  if (isLoadingExamples) {
    <LottieView
      autoPlay
      ref={animation}
      style={{
        width: 40,
        height: 40,
      }}
      source={require("@/assets/lottie/loader.json")}
    />;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Примеры</Text>
        <View style={styles.examples}>
          {examples.map((example, index) => (
            <View key={index}>
              <Text>{example.source}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
