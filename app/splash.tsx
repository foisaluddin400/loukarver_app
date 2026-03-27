import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import SplashIco from "@/components/image/SplashIco";

export default function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <SplashIco></SplashIco>
      <Text style={{marginTop:11}}>Build something Real</Text>
       <TouchableOpacity activeOpacity={0.9} style={styles.createBtn}>
            <Text style={styles.createBtnText}>Create Prompt</Text>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
  },
    createBtn: {
    height: 54,
    borderRadius: 18,
    paddingHorizontal:11,
    backgroundColor: "#6F370F",
    justifyContent: "center",
    alignItems: "center",
    
    marginTop:11
  },

  createBtnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});