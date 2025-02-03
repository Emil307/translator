import React from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { Translator } from "@/src/widgets/translator";
import { styles } from "../styles";
import { History } from "@/src/widgets/history";
import { Header } from "@/src/widgets/header";
import { Navbar } from "@/src/widgets/navbar";
import { useTranslation } from "@/src/features/translator";
import { removeStorageData } from "@/src/shared";
import { storage } from "@/src/entities/translator";

export default function TranslatorScreen() {
  const {
    initialText,
    translatedText,
    isTranslating,
    setInitialText,
    setTranslatedText,
    setIsTranslating,
    handleTranslate,
  } = useTranslation();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => removeStorageData(storage.HISTORY)}
        >
          <Text>очистить хранилище</Text>
        </TouchableWithoutFeedback>
        <Header />
        <Translator
          initialText={initialText}
          translatedText={translatedText}
          isTranslating={isTranslating}
          setInitialText={setInitialText}
          setTranslatedText={setTranslatedText}
          setIsTranslating={setIsTranslating}
          handleTranslate={handleTranslate}
        />
        <History />
        <Navbar />
      </View>
    </TouchableWithoutFeedback>
  );
}
