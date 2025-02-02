import React from "react";
import { Tabs } from "expo-router";

export function AuthLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen
        name="(signin)"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
