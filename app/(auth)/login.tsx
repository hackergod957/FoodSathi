import {
  View,
  Text,
  TextInput,
  Animated,
  Easing,
  Alert,
  ActivityIndicator,
  Button,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import FlatButton from "@/components/flatButton";
import OrSeparator from "@/components/orSeparator";
import Input_Field from "@/components/input-feild";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth, { onAuthStateChanged } from "@react-native-firebase/auth";

const Login = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [phone, setPhone] = useState("+977");
  const [otp, setOtp] = useState("");
  const [enabledOtp, setEnabledOtp] = useState(false);
  const [loading, setLoading] = useState(false);

  GoogleSignin.configure({
    webClientId:
      "893906370461-4okmh1rtope0ha0lnmel78q8nnb65tao.apps.googleusercontent.com", 
  });

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      const { data } = await GoogleSignin.signIn();
      console.log("ID Token:", data);
      const idToken = data?.idToken;
      const googleCredential = auth.GoogleAuthProvider.credential(
        idToken ?? null
      );
      const userCredential = await auth().signInWithCredential(
        googleCredential
      );

      console.log("User signed in:", userCredential.user);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error during sign-in:", error.message);
      } else {
        console.error("Error during sign-in:", error);
      }
    }
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
  });

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeIn = Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    });

    fadeIn.start();
    return () => fadeIn.stop();
  }, [opacity]);

  if (initializing) return null;

  if (!fontsLoaded || loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#361187" />
      </View>
    );
  }

  const signOut = async () => {
    try {
      GoogleSignin.revokeAccess();
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return (
      <SafeAreaView className="flex-1">
        {!enabledOtp ? (
          <Animated.View
            className="flex-1 pt-4 h-full gap-52 items-center"
            style={{ opacity }}
          >
            <View className="h-20 items-center gap-10">
              <Navbar title="Authentication" icon={false} />
              <Text
                className="text-center leading-6 font-extralight"
                style={{ fontFamily: "Poppins-Regular" }}
              >
                Enter your phone number so we can send you an OTP to continue.
              </Text>
            </View>
            <View className="gap-20 items-center">
              <View className="items-center">
                <View className="h-36 flex-row items-center gap-8 mx-5 justify-center">
                  <View className="flex flex-row justify-center items-center gap-1">
                    <View className="flex flex-row border-b-2 items-center justify-center mb-4">
                      <Text className="text-3xl">🇳🇵</Text>
                      <Text className="pt-1">+977</Text>
                    </View>
                    <Ionicons name="caret-down-outline" />
                  </View>
                  <Input_Field
                    placeholder={"98********"}
                    keyboard_type="numeric"
                    maxLength={10}
                    onChangeText={(e) => {
                      setPhone("+977" + e);
                    }}
                    style="my-1 rounded-md outline-none border-b-2 w-80 pb-1 pl-2"
                  />
                </View>
                <View className="gap-4 items-center">
                  <FlatButton
                    text="Continue"
                    onPress={() => {
                      setEnabledOtp(true);
                    }}
                    style="w-80 h-16 bg-[#361187]"
                    textStyle="text-xl"
                  />
                  <Text className="text-slate-500 text-xl">
                    Forgot phone number
                  </Text>
                </View>
              </View>
              <OrSeparator text="or" />
              <GoogleSigninButton
                className="h-16 w-96 bg-black gap-5"
                onPress={onGoogleButtonPress}
              />
            </View>
          </Animated.View>
        ) : (
          <Animated.View>
            <View className="h-20 items-center gap-10">
              <Navbar title="Authentication" icon={false} />
              <Text
                className="text-center leading-6 font-extralight"
                style={{ fontFamily: "Poppins-Regular" }}
              >
                We have sent an OTP to the{" "}
                {phone.slice(0, 4) +
                  " " +
                  phone.slice(4, 7) +
                  "****" +
                  phone.slice(-3)}
              </Text>
            </View>
            <View className="gap-20 items-center">
              <View className="items-center">
                <View className="h-36 flex-row items-center gap-8 mx-5 justify-center">
                  <Input_Field
                    placeholder={"98********"}
                    keyboard_type="numeric"
                    maxLength={10}
                    onChangeText={(e) => {
                      setOtp(e);
                    }}
                    style="my-1 rounded-md outline-none border-b-2 w-80 pb-1 pl-2"
                  />
                </View>
                <View className="gap-4 items-center">
                  <FlatButton
                    text="Continue"
                    onPress={() => {}}
                    style="w-80 h-16 bg-[#361187]"
                    textStyle="text-xl"
                  />
                  <Text className="text-slate-500 text-xl">
                    Forgot phone number
                  </Text>
                </View>
              </View>
              <OrSeparator text="or" />
              <FlatButton
                text="Sign in with Google"
                onPress={() => {}}
                style="h-16 w-96 bg-black gap-5"
                textStyle="text-xl"
                iconEnable={true}
                icon_uri={require("@/assets/images/google.png")}
              />
            </View>
          </Animated.View>
        )}
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <Navbar title="Dashboard" icon={true} uri={user.photoURL} />
        <View>
          <Text>Hello welcome {user.displayName}</Text>
          <Button title="Sign Out" onPress={signOut} />
        </View>
      </SafeAreaView>
    );
  }
};

export default Login;
