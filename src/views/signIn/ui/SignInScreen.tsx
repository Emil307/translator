import { useRouter } from "expo-router";
import { Keyboard, TouchableWithoutFeedback, View, Text } from "react-native";

export default function SignInScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Text>Sign in</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
