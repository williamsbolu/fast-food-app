import { SplashScreen, Stack } from "expo-router";

// An expo hook that loads custom font asynchronously
import { useFonts } from "expo-font";

import { useEffect } from "react";
import "./globals.css";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync(); // Manually hide the splash screen when the resources are loaded in
  }, [fontsLoaded, error]);

  return <Stack screenOptions={{ headerShown: false }} />;
}
