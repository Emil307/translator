import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { Translator } from "@/src/widgets/translator";
import { styles } from "../styles";
import { History } from "@/src/widgets/history";
import { Header } from "@/src/widgets/header";
import { Navbar } from "@/src/widgets/navbar";
import { useTranslation } from "@/src/features/translator";
import { Examples } from "@/src/widgets/examples";

export default function TranslatorScreen() {
  const {
    initialText,
    translatedText,
    isTranslating,
    examples,
    isLoadingExamples,
    history,
    from,
    setInitialText,
    setTranslatedText,
    setIsTranslating,
    handleTranslate,
    handleGetHistory,
    setFrom,
  } = useTranslation();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* <TouchableWithoutFeedback
          onPress={() => removeStorageData(storage.HISTORY)}
        >
          <Text>очистить хранилище</Text>
        </TouchableWithoutFeedback> */}
        <Header />
        <Translator
          initialText={initialText}
          translatedText={translatedText}
          isTranslating={isTranslating}
          from={from}
          setInitialText={setInitialText}
          setTranslatedText={setTranslatedText}
          setIsTranslating={setIsTranslating}
          handleTranslate={handleTranslate}
          setFrom={setFrom}
        />
        {initialText && (
          <Examples examples={examples} isLoadingExamples={isLoadingExamples} />
        )}
        <History
          history={history}
          from={from}
          handleGetHistory={handleGetHistory}
          setInitialText={setInitialText}
          setTranslatedText={setTranslatedText}
          setFrom={setFrom}
        />
        <Navbar />
      </View>
    </TouchableWithoutFeedback>
  );
}
