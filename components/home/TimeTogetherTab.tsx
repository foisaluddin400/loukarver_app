import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const TimeTogetherTab = () => {
  return (
    <View style={styles.center}>
      <View style={styles.linearGradientContainer}>
        <LinearGradient
          colors={["#B7835E", "#8B4513"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.badge}
        >
          <Text style={styles.bigNumber}>237</Text>
          <Text style={styles.subtitle}>Days Together</Text>
        </LinearGradient>
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.smallTitle}>Started</Text>
          <Text>Jul 4, 2025</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.smallTitle}>Milestone</Text>
          <Text>Nov 16, 2026</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.smallTitle}>Next Yr</Text>
          <Text>Jul 4, 2026</Text>
        </View>
      </View>
    </View>
  );
};

export default TimeTogetherTab;

const styles = StyleSheet.create({
  center: {
    marginTop: 20,
  },
  linearGradientContainer: {
    alignItems: "center",
  },
  badge: {
    width: 150,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  bigNumber: {
    fontSize: 28,
    fontWeight: "600",
    color: "white",
  },
  subtitle: {
    marginBottom: 10,
    color: "white",
  },
  progressBar: {
    height: 10,
    backgroundColor: "#e0d7cf",
    borderRadius: 10,
    width: "100%",
    marginVertical: 20,
  },
  progressFill: {
    width: "50%",
    height: "100%",
    backgroundColor: "#8B4513",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
  box: {
    width: "31%",
    backgroundColor: "#FBF7F2",
    padding: 10,
    borderRadius: 15,
  },
  smallTitle: {
    fontSize: 12,
    color: "#7a3f16",
  },
});