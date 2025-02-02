import React from "react";
import { Slot } from "expo-router";
import { View, Text } from "react-native";

export function AuthLayout() {
  return (
    <View>
      <Text>auth layout</Text>
      <Slot />
    </View>
  );
}
