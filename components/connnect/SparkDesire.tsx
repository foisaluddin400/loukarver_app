import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CreatePromptModal from "./CreatePromptModal";

const SparkDesire = () => {
  const [open, setOpen] = useState(false);
  return (
    <ScrollView>
      {/* SPARK & DESIRE */}

      <View style={styles.sparkHeader}>
        <Text style={styles.sectionTitle}>SPARK & DESIRE</Text>

        <View style={styles.sparkTabs}>
          <Text style={styles.sparkActive}>❤️ Romantic</Text>
          <Text style={styles.sparkTab}>🔥 Desire</Text>
        </View>
      </View>

      {/* FILTER CHIPS */}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {["All", "Connection", "Nostalgia", "Vulnerability", "Gratitude"].map(
          (item, i) => (
            <View key={i} style={styles.chip}>
              <Text style={{ color: "#6F370F" }}>{item}</Text>
            </View>
          ),
        )}
      </ScrollView>

      {/* PROMPT CARD */}

      <View style={styles.promptCard}>
        <Text style={styles.promptText}>
          What moment from our relationship do you replay most in your mind?
        </Text>

        <View style={styles.rowBetween}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Connection</Text>
          </View>

          <TouchableOpacity style={styles.sendBtn}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* CREATE PROMPT */}

      <TouchableOpacity onPress={() => setOpen(true)} style={styles.createPrompt}>
        <Text style={{ color: "#6F370F" }}>+ Create your own prompt</Text>
      </TouchableOpacity>

      <View
        style={{
          marginTop: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#8B4513",
          paddingBottom: 30,
          marginBottom: 20,
        }}
      >
        <LinearGradient
          colors={["#B7835E", "#8B4513"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.badge}
        >
          <Text style={{ color: "#fff" }}>Respond to Amanda</Text>
        </LinearGradient>
      </View>

      {/* DISAPPEARING */}

      <Text style={styles.sectionTitle}>DISAPPEARING PHOTOS & VIDEOS</Text>

      <LinearGradient
        colors={["#B7835E", "#8B4513"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.badge}
      >
        <Text style={styles.fire}>🔥</Text>

        <Text style={styles.disappearTitle}>Amanda sent something</Text>

        <Text style={styles.disappearSub}>Opens once. tap to reveal</Text>
      </LinearGradient>

      <TouchableOpacity style={styles.sendDisappear}>
        <Text style={styles.sendDisappearText}>
          Send something disappearing
        </Text>
      </TouchableOpacity>
       <CreatePromptModal
        visible={open}
        onClose={() => setOpen(false)}
      ></CreatePromptModal>
    </ScrollView>
  );
};

export default SparkDesire;

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: "500",
    marginVertical: 10,
    color: "#6F370F",
  },

  activityCard: {
    borderWidth: 1,
    borderColor: "#c98b5b",
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
  },

  activityTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },

  progressBadge: {
    backgroundColor: "#f3c6a6",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  progressText: {
    color: "#8c4a1f",
  },

  doneBadge: {
    backgroundColor: "#cfd6cd",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  doneText: {
    color: "#4d5c4c",
  },

  suggestBtn: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#c98b5b",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },

  suggestText: {
    color: "#7a3f16",
  },

  helperText: {
    fontSize: 12,
    marginTop: 5,
    color: "#7a3f16",
  },

  sparkHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  sparkTabs: {
    flexDirection: "row",
    gap: 7,
    borderWidth: 1,
    padding: 4,
    borderRadius: 20,
    borderColor: "#B7835E",
  },

  sparkActive: {
    backgroundColor: "#A16438",
    color: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  sparkTab: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  chip: {
    borderWidth: 1,
    borderColor: "#B7835E",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginRight: 8,
    marginTop: 10,
  },
  saveBtn: {
    backgroundColor: "#7a3f16",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  promptCard: {
    borderWidth: 1,
    borderColor: "#B7835E",
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
    backgroundColor: "#FFD1B033",
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
    backgroundColor: "#FFD4C9",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  tagText: {
    color: "#FF9E84",
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
    borderColor: "#B7835E",
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
    borderColor: "#6F370F",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 40,
  },

  sendDisappearText: {
    color: "#6F370F",
    fontWeight: "600",
  },
});
