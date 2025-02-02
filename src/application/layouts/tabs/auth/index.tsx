import React from "react";
import { Slot } from "expo-router";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

export function AuthLayout() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Slot />
      </View>
    </TouchableWithoutFeedback>
  );
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
  },
});
