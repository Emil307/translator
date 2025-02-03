import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { Translator } from "@/src/widgets/translator";
import { styles } from "../styles";
import { History } from "@/src/widgets/history";
import { Header } from "@/src/widgets/header";
import { Navbar } from "@/src/widgets/navbar";
import { useTranslation } from "@/src/features/translator";

export default function TranslatorScreen() {
  const {
    initialText,
    translatedText,
    isTranslating,
    history,
    setInitialText,
    setTranslatedText,
    setIsTranslating,
    handleTranslate,
    handleGetHistory,
  } = useTranslation();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
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
        <History history={history} handleGetHistory={handleGetHistory} />
        <Navbar />
      </View>
    </TouchableWithoutFeedback>
  );
}
