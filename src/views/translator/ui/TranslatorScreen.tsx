import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { Translator } from "@/src/widgets/translator";
import { styles } from "../styles";
import { History } from "@/src/widgets/history";
import { Header } from "@/src/widgets/header";
import { Navbar } from "@/src/widgets/navbar";

export default function TranslatorScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <Translator />
        <History />
        <Navbar />
      </View>
    </TouchableWithoutFeedback>
  );
}
