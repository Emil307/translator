import { router, Slot } from "expo-router";
import { useEffect } from "react";

export function RootLayout() {
  const isAuth = false;

  useEffect(() => {
    if (!isAuth) {
      router.push("/auth/signin");
      return;
    }
  }, []);

  return <Slot />;
}
