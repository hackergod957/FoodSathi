import { View, Text, Image } from "react-native";
import React from "react";

const splashScreen = require("@/assets/images/splashScreen.png"); // Ensure the path is correct and supported
const logo = require("@/assets/images/icon.png");
const SplashScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Image source={splashScreen} className="absolute w-full z-0" />
      <Image source={logo} className="w-56 h-56" />
      <Text className="text-[18px] mt-[22px] text-white " style={{
        fontFamily: 'Ketchup Manis Demo'
      }}>Hot food at your door wait no more !</Text>
    </View>
  );
};

export default SplashScreen;
