import SplashScreen from "@/components/SplashScreen";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
export default function Index() {
  const [splashScreen, setSplashScreen] = useState<boolean>(true);
  useEffect(() => {
    const result = setTimeout(() => {
      setSplashScreen(false);
    }, 1500);
    return () => {
      clearTimeout(result);
    };
  });

  return <>{splashScreen ? <SplashScreen /> : <View></View>}</>;
}
