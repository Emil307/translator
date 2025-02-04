import React, { useEffect } from "react";
import { router, Slot } from "expo-router";

export function RootLayout() {
  const isAuth = true;

  useEffect(() => {
    if (!isAuth) {
      router.push("/auth/signin");
      return;
    }

    router.push("/tabs/translator");
  }, []);

  return <Slot />;
}
