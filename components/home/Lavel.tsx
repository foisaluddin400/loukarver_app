import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import TimeTogetherTab from "./TimeTogetherTab";
import DatesTab from "./DatesTab";
import TogetherAgainTab from "./TogetherAgainTab";

import MoodModal from "./MoodModal";

const Lavel = () => {
  const [tab, setTab] = useState<"time" | "dates" | "again">("time");

  const [moodModal, setMoodModal] = useState<"lou" | "amanda" | null>(null);

  // ✅ only mood modal close handler
  const closeMoodModal = () => {
    setMoodModal(null);
  };

  return (
    <View style={styles.container}>
      
      {/* Tabs */}
      <View style={styles.timeTogether}>
        <View style={styles.tabs}>
          {["Time Together", "Dates", "Together Again"].map((item, i) => {
            const key = i === 0 ? "time" : i === 1 ? "dates" : "again";

            return (
              <TouchableOpacity
                key={item}
                style={[styles.tab, tab === key && styles.activeTab]}
                onPress={() => setTab(key as any)}
              >
                <Text
                  style={tab === key ? styles.activeTabText : styles.tabText}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Tab Content */}
        {tab === "time" && <TimeTogetherTab />}
        {tab === "dates" && <DatesTab />}
        {tab === "again" && <TogetherAgainTab />}
      </View>

      {/* DESIRE MOOD */}
      <View style={styles.timeTogether}>
        <Text style={styles.sectionTitle}>DESIRE MOOD</Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.moodBtn}
            onPress={() => setMoodModal("lou")}
          >
            <Text>Lou</Text>
            <Text>❤️ Loving</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.moodBtn}
            onPress={() => setMoodModal("amanda")}
          >
            <Text>Amanda</Text>
            <Text>Tap to set mood</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ✅ Only Mood Modal */}
      <MoodModal moodModal={moodModal} closeModal={closeMoodModal} />

    </View>
  );
};

export default Lavel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#FBF7F2",
    borderRadius: 20,
    padding: 5,
  },
  timeTogether: {
    borderColor: "#B7835E",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#FFFFFF",
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#A16438",
    borderRadius: 20,
  },
  tabText: {
    color: "#A16438",
  },
  activeTabText: {
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
  sectionTitle: {
    marginBottom: 15,
    fontWeight: "500",
    color: "#6F370F",
  },
  moodBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#B7835E",
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#FBF7F2",
    alignItems: "center",
  },
});