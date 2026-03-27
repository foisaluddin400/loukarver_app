import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import EditDateModal from "./EditDateModal";



const TogetherAgainTab = () => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.center}>
      <Text style={styles.subtitle1}>Reunion countdown March 15, 2026</Text>

      <View style={styles.row}>
        {["days", "hrs", "mins", "secs"].map((unit) => (
          <LinearGradient
            key={unit}
            colors={["#B7835E", "#8B4513"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.boxAgain}
          >
            <View>
              <Text style={styles.first}>05 </Text>
              <Text style={styles.date}>{unit} </Text>
            </View>
          </LinearGradient>
        ))}
      </View>

      <TouchableOpacity
        style={styles.editButton}
     onPress={() => setOpen(true)}
      >
        <Text>Edit Date</Text>
      </TouchableOpacity>
       <EditDateModal visible={open} onClose={() => setOpen(false)} />
    </View>
  );
};

export default TogetherAgainTab;

const styles = StyleSheet.create({
  center: {
    marginTop: 20,
  },
  subtitle1: {
    fontSize: 14,
    color: "#6F370F",
    fontWeight: "700",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
  boxAgain: {
    textAlign: "center",
    width: "22%",
    backgroundColor: "#FBF7F2",
    padding: 15,
    borderRadius: 15,
  },
  first: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
  },
  date: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
  editButton: {
    backgroundColor: "#F6E9E5",
    borderColor: "#7a3f16",
    borderWidth: 1,
    padding: 5,
    fontWeight: "600",
    marginTop: 15,
    width: 102,
    borderRadius: 20,
    alignItems: "center",
    color: "#6F370F",
  },
});