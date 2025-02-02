import { View, Text, TextInput } from "react-native";

export default function SignInScreen() {
  return (
    <View>
      <Text style={{ color: "#fff" }}>Sign in</Text>
      <TextInput placeholder={"Начните писать текст"} />
    </View>
  );
}
