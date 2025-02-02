import React from "react";
import { Slot } from "expo-router";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { StyleSheet } from "react-native";

export function AuthLayout() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Slot />
      </View>
    </TouchableWithoutFeedback>
  );
}

AuthLayout.options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "#1a1a1a",
  },
});
