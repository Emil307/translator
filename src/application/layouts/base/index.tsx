import React from "react";
import { Slot } from "expo-router";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { StyleSheet } from "react-native";

export function BaseLayout() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Slot />
      </View>
    </TouchableWithoutFeedback>
  );
}

BaseLayout.options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    backgroundColor: "#1a1a1a",
  },
});
