import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AnniversaryIco from "../image/AnniversaryIco";
import AddDateModal from "./AddDateModal";


const DatesTab = () => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <View style={styles.mainContent}>
        <LinearGradient
          colors={["#B7835E", "#8B4513"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.badgeDate}
        >
          <View>
            <View style={styles.anniversary}>
              <AnniversaryIco />
            </View>
            <Text style={styles.first}>First Date Anniversary</Text>
            <Text style={styles.date}>Nov 15</Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={["#B7835E", "#8B4513"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.badgeDate}
        >
          <View>
            <View style={styles.anniversary}>
              <AnniversaryIco />
            </View>
            <Text style={styles.first}>First Date Anniversary</Text>
            <Text style={styles.date}>Nov 15</Text>
          </View>
        </LinearGradient>
      </View>

      <TouchableOpacity
        style={styles.addButton}
       onPress={() => setOpen(true)}
      >
        <Text style={{ color: "" }}>+ Add</Text>
      </TouchableOpacity>
 <AddDateModal visible={open} onClose={() => setOpen(false)} />
    </View>
  );
};

export default DatesTab;

const styles = StyleSheet.create({
  mainContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 20,
  },
  badgeDate: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    textAlign: "center",
  },
  anniversary: {
    flex: 1,
    alignItems: "center",
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
  addButton: {
    borderColor: "#7a3f16",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
  },
});