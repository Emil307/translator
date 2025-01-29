import React from "react";
import { Tabs } from "expo-router";

export function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen
        name="(translator)"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
