import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import FlatButton from "@/components/flatButton";
import OrSeparator from "@/components/orSeparator";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const auth = FIREBASE_AUTH;

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 pt-4 h-full gap-52 items-center ">
        <View className="h-20 items-center gap-10">
          <Navbar title="Authentication" icon={false} />
          <Text
            className="text-center leading-6 font-extralight "
            style={{ fontFamily: "Poppins-Regular" }}
          >
            Enter your phone number so we can send you an OTP to continue.
          </Text>
        </View>
        <View className="gap-20 items-center">
          <View className="items-center ">
            <View className="h-36 flex-row items-center gap-8 mx-5 justify-center ">
              <View className="flex flex-row justify-center items-center  gap-1">
                <View className="flex flex-row border-b-2 items-center justify-center mb-4">
                  <Text className="text-3xl">🇳🇵</Text>
                  <Text className="pt-1">+977 </Text>
                </View>
                <Ionicons name="caret-down-outline" />
              </View>

              <TextInput
                className="my-1 rounded-md  outline-none border-b-2  w-80 pb-1 pl-2"
                returnKeyType="done"
                inputMode="numeric"
                onChangeText={(e) => {
                  setPhone(e);
                }}
                maxLength={10}
              />
            </View>
            <View className="gap-4 items-center">
              <FlatButton
                text="Continue"
                onPress={() => {}}
                style="w-80 h-16 bg-[361187]"
                textStyle="text-xl"
              />
              <Text className="text-slate-500  text-xl">
                Forgot phone number{" "}
              </Text>
            </View>
          </View>
          <OrSeparator text="or" />
          <FlatButton
            text="Sign in with Google"
            onPress={() => console.log("Google Sign-In")}
            style="h-16 w-96 bg-black"
            textStyle="text-xl"
            iconEnable={true}
            icon_uri={require("@/assets/images/google.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
