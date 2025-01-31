import { View } from "react-native";
import { Translator } from "@/src/widgets/translator";
import { styles } from "../styles";
import { History } from "@/src/widgets/history";
import { Header } from "@/src/widgets/header";

export default function TranslatorScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Translator />
      <History />
    </View>
  );
}
