import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Avature from "../image/Avature";
import { router } from "expo-router";

const MainNavbar = () => {
  const [activeTab, setActiveTab] = useState<"lou" | "amanda">("lou");

  return (
    <View style={styles.container}>
      {/* Left Section */}
      <Pressable onPress={() => router.push("/profile/mainProfile")}>
        <View style={styles.left}>
          <View style={styles.avatar}>
            <Avature />
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.name}>Hey Lou</Text>
          </View>
        </View>
      </Pressable>

      {/* Right Section */}

        <View style={styles.onlineRow}>
          <View style={styles.onlineDot} />
          <Text style={styles.onlineText}>Aligned</Text>
        </View>
 
    </View>
  );
};

export default MainNavbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBlockColor: "#B7835E",
    borderBottomWidth: 1,
   backgroundColor: "#FBF7F2",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  nameContainer: {
    marginLeft: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "400",
  },
  avatar: {
    width: 50,
    height:50,
    borderColor: "#B7835E",
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  onlineRow: {
    flexDirection: "row",
    alignItems: "center",
   backgroundColor: "#CE96694D",
   paddingHorizontal: 20,
   paddingVertical: 16,
   borderRadius: 20,
  
  },

  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "green",
    marginRight: 5,
  },

  onlineText: {
    fontSize: 16,
    color: "#6F370F",
    fontWeight: "500",
  },

  tabs: {
    flexDirection: "row",
  },

  tab: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 8,
    backgroundColor: "#eee",
  },

  activeTab: {
    backgroundColor: "red",
  },

  tabText: {
    fontSize: 14,
    color: "#333",
  },

  activeText: {
    color: "#fff",
    fontWeight: "600",
  },
});
