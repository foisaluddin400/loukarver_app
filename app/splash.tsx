// app/index.tsx (Entry point of app)
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

// Prevent default Expo splash from auto hiding
SplashScreen.preventAutoHideAsync();

export default function Splash() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      setIsReady(true);
      await SplashScreen.hideAsync(); // hide default Expo splash
      router.replace("/(tabs)"); // navigate to home page
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Optional: if image not loaded yet, still show something
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splash-icon.png")} // high-res splash
        style={styles.splashImage}
      />
      <Text style={styles.text}>Build something Real</Text>

      {/* Optional skip button */}
      <TouchableOpacity
        style={styles.createBtn}
        activeOpacity={0.9}
        onPress={async () => {
          setIsReady(true);
          await SplashScreen.hideAsync();
          router.replace("/(tabs)");
        }}
      >
        <Text style={styles.createBtnText}>Create Prompt</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  splashImage: {
    width: 250, // adjust to your splash size
    height: 250,
    resizeMode: "contain",
  },
  text: {
    marginTop: 11,
    fontSize: 16,
    color: "#000",
  },
  createBtn: {
    height: 54,
    borderRadius: 18,
    paddingHorizontal: 20,
    backgroundColor: "#6F370F",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  createBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});