import SplashScreen from "@/components/SplashScreen";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
export default function Index() {
  const [splashScreen, setSplashScreen] = useState<boolean>(true);
  const Navigation = useNavigation();
  useEffect(() => {
    Navigation.setOptions({
      tabBarStyle: {display: splashScreen ? 'none' : 'flat'}
    })
    const result = setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
    return () => {
      clearTimeout(result);
    };
  },[splashScreen,Navigation]);

  return <>{splashScreen ? <SplashScreen /> : <View></View>}</>;
}
