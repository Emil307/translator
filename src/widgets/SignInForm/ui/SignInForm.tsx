import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { useRouter } from "expo-router";

export const SignInForm: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/(translator)")}
          style={styles.signUp}
        >
          <Text>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
