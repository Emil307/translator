import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";
import { language } from "@/src/entities/translator";

interface TranslationProps {
  translation: string;
  language: language;
}

export const Translation: React.FC<TranslationProps> = ({
  translation,
  language,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            ...styles.text,
            fontSize: translation.length > 150 ? 16 : 20,
            lineHeight: translation.length > 150 ? 18 : 22,
          }}
        >
          {translation}
        </Text>
      </View>
      {/* <View>
        <TouchableOpacity onPress={() => speakText(translation, language)}>
          <Image
            source={require("@/assets/images/play-sound.png")}
            style={styles.play}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
