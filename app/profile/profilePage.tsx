import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingIco from "@/components/image/SettingIco";
import EditIco from "@/components/image/EditIco";
import Avature from "@/components/image/Avature";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#8B4513" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PROFILE</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => router.push("/profile/editPage")}>
            <EditIco />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/profile/settingPage")}>
            <SettingIco />
          </TouchableOpacity>
        </View>
      </View>

      {/* USER CARD */}
      <View style={styles.userCard}>
        <View style={styles.avatar}>
          <Avature />
        </View>

        <Text style={styles.userName}>USER NAME</Text>
        <Text style={styles.subText}>Connected With : Amanda</Text>
        <Text style={styles.subText}>Together since March 3, 2026</Text>
      </View>

      {/* SNAPSHOT */}
      <Text style={styles.sectionTitle}>RELATIONSHIP SNAPSHOT</Text>

      <View style={styles.snapshotRow}>
        <View style={styles.snapshotBox}>
          <Text style={styles.snapshotNumber}>24</Text>
          <Text style={styles.snapshotLabel}>Appreciations</Text>
        </View>

        <View style={styles.snapshotBox}>
          <Text style={styles.snapshotNumber}>8</Text>
          <Text style={styles.snapshotLabel}>Dates Planned</Text>
        </View>
      </View>

      <View style={styles.snapshotRow}>
        <View style={styles.snapshotBox}>
          <Text style={styles.snapshotNumber}>15</Text>
          <Text style={styles.snapshotLabel}>Memories</Text>
        </View>

        <View style={styles.snapshotBox}>
          <Text style={styles.snapshotNumber}>6</Text>
          <Text style={styles.snapshotLabel}>Activities Completed</Text>
        </View>
      </View>

      {/* REFLECTION */}
      <Text style={styles.sectionTitle}>My Reflection</Text>

      <View style={styles.reflectionBox}>
        <Text style={styles.reflectionText}>
          “What I love most about us is how we can turn the simplest walk in the
          park into an adventure of deep conversation and laughter.”
        </Text>
      </View>

      {/* LOGOUT */}
      <TouchableOpacity
        onPress={() => router.push("/auth/login")}
        style={styles.logoutBtn}
      >
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF7F2",
    padding: 12,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#8B4513",
    letterSpacing: 1,
  },
  headerRight: {
    flexDirection: "row",
    gap: 14,
  },

  /* USER CARD */
  userCard: {
    borderWidth: 1,
    borderColor: "#B7835E",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#FFF9F2",
  },
  avatar: {
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6F370F",
    marginBottom: 6,
  },
  subText: {
    fontSize: 12,
    color: "#6F370F",
  },

  /* SECTION TITLE */
  sectionTitle: {
    marginTop: 22,
    marginBottom: 12,
    fontSize: 13,
    fontWeight: "500",
    color: "#6F370F",
  },

  /* SNAPSHOT */
  snapshotRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  snapshotBox: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#B7835E",
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
    backgroundColor: "#FFF9F2",
  },
  snapshotNumber: {
    fontSize: 18,
    fontWeight: "500",
    color: "#6F370F",
  },
  snapshotLabel: {
    fontSize: 12,
    color: "#6F370F",
    marginTop: 4,
  },

  /* REFLECTION */
  reflectionBox: {
    borderWidth: 1,
    borderColor: "#B7835E",
    borderRadius: 16,
    padding: 16,
    backgroundColor: "#FFF9F2",
  },
  reflectionText: {
    fontSize: 13,
    color: "#6F370F",
    lineHeight: 20,
    fontStyle: "italic",
  },

  /* LOGOUT */
  logoutBtn: {
    marginTop: 30,
    backgroundColor: "#6F370F",
    paddingVertical: 14,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
