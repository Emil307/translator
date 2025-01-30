import { View } from "react-native";
import { Translator } from "@/src/widgets/translator";
import { styles } from "../styles";

export default function TranslatorScreen() {
  return (
    <View style={styles.container}>
      <Translator />
    </View>
  );
}
