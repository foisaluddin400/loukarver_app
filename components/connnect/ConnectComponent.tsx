import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SparkDesire from "./SparkDesire";
import SharedStatusModal from "./SharedStatusModal";
import GoodNightModal from "./GoodNightModal";
import { router } from "expo-router";

const ConnectComponent = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <ScrollView style={styles.container}>
      {/* SHARED ACTIVITIES */}

      <Text style={styles.sectionTitle}>SHARED ACTIVITIES</Text>

      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={styles.activityCard}>
          <Text style={{ fontSize: 35 }}>🏃</Text>
          <View>
            <Text style={styles.activityTitle}> Morning Workout</Text>

            <View style={styles.row}>
              <View style={styles.progressBadge}>
                <Text style={styles.progressText}>In Progress</Text>
              </View>

              <View style={styles.doneBadge}>
                <Text style={styles.doneText}>Done</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={styles.activityCard}>
          <Text style={{ fontSize: 35 }}>🏃</Text>
          <View>
            <Text style={styles.activityTitle}> Cook Same Recipe</Text>

            <View style={styles.row}>
              <View style={styles.progressBadge}>
                <Text style={styles.progressText}>In Progress</Text>
              </View>

              <View style={styles.doneBadge}>
                <Text style={styles.doneText}>Done</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={styles.activityCard}>
          <Text style={{ fontSize: 35 }}>🏃</Text>
          <View>
            <Text style={styles.activityTitle}> Farmer's Market</Text>

            <View style={styles.row}>
              <View style={styles.progressBadge}>
                <Text style={styles.progressText}>In Progress</Text>
              </View>

              <View style={styles.doneBadge}>
                <Text style={styles.doneText}>Done</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setOpen1(true)}>
        <View style={styles.activityCard}>
          <Text style={{ fontSize: 35 }}>🏃</Text>
          <View>
            <Text style={styles.activityTitle}> Good Night Ritual</Text>

            <View style={styles.row}>
              <View style={styles.progressBadge}>
                <Text style={styles.progressText}>In Progress</Text>
              </View>

              <View style={styles.doneBadge}>
                <Text style={styles.doneText}>Done</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* SUGGEST ACTIVITY */}

      <TouchableOpacity
        onPress={() => router.push("/suggestAdd/suggestActivityAdd")}
        style={styles.suggestBtn}
      >
        <Text style={styles.suggestText}>+ Suggest Activity</Text>
      </TouchableOpacity>

      <Text style={styles.helperText}>
        Your partner must accept before the activity becomes shared.
      </Text>
      <SharedStatusModal
        visible={open}
        onClose={() => setOpen(false)}
      ></SharedStatusModal>

      <GoodNightModal
        visible={open1}
        onClose={() => setOpen1(false)}
      ></GoodNightModal>

      {/* SPARK & DESIRE */}
      <SparkDesire></SparkDesire>
    </ScrollView>
  );
};

export default ConnectComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#FBF7F2",
  },

  sectionTitle: {
    fontWeight: "600",
    marginVertical: 10,
    color: "#6F370F",
  },

  activityCard: {
    borderWidth: 1,
    borderColor: "#B7835E",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  activityTitle: {
    fontSize: 16,
    marginBottom: 8,
    color: "#6F370F",
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  progressBadge: {
    backgroundColor: "#FDF6C8",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  progressText: {
    color: "#F3AA0D",
  },

  doneBadge: {
    backgroundColor: "#E9FFE4",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  doneText: {
    color: "#008000",
  },

  suggestBtn: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#B7835E",
    borderRadius: 15,
    padding: 15,

    marginTop: 10,
  },

  suggestText: {
    color: "#6F370F",
    fontWeight: 500,
  },

  helperText: {
    fontSize: 12,
    marginTop: 5,
    color: "#6F370F",
    textAlign: "center",
  },

  sparkHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  sparkTabs: {
    flexDirection: "row",
    gap: 10,
  },

  sparkActive: {
    backgroundColor: "#8b4a1f",
    color: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  sparkTab: {
    borderWidth: 1,
    borderColor: "#8b4a1f",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  chip: {
    borderWidth: 1,
    borderColor: "#c98b5b",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginRight: 8,
    marginTop: 10,
  },

  promptCard: {
    borderWidth: 1,
    borderColor: "#c98b5b",
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
  },

  promptText: {
    fontSize: 14,
    marginBottom: 10,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tag: {
    backgroundColor: "#f7b7a0",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  tagText: {
    color: "#8b4a1f",
  },

  sendBtn: {
    backgroundColor: "#8b4a1f",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
  },

  sendText: {
    color: "#fff",
  },

  createPrompt: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#c98b5b",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },

  disappearCard: {
    backgroundColor: "#8b4a1f",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    marginTop: 15,
  },

  fire: {
    fontSize: 30,
  },

  disappearTitle: {
    color: "#fff",
    fontSize: 16,
    marginTop: 8,
  },

  disappearSub: {
    color: "#f3e5d8",
  },

  sendDisappear: {
    borderWidth: 1,
    borderColor: "#8b4a1f",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 40,
  },

  sendDisappearText: {
    color: "#8b4a1f",
    fontWeight: "600",
  },
});
