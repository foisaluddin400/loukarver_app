import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  moodModal: "lou" | "amanda" | null;
  closeModal: () => void;
};

const moods = [
  { icon: "😊", label: "Happy" },
  { icon: "❤️", label: "Love" },
  { icon: "🔥", label: "Excited" },
  { icon: "😍", label: "Romantic" },
  { icon: "😴", label: "Sleepy" },
  { icon: "🥰", label: "Caring" },
  { icon: "😉", label: "Flirty" },
];

const MoodModal = ({ moodModal, closeModal }: Props) => {
  return (
    <Modal visible={moodModal !== null} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.closeBtn} onPress={closeModal}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          <Text style={styles.modalTitle}>
            {moodModal === "lou" ? "Lou's Mood" : "Amanda's Mood"}
          </Text>

          {/* GRID */}
          <View style={styles.grid}>
            {moods.map((item, index) => (
              <TouchableOpacity key={index} style={styles.card}>
                <Text style={styles.icon}>{item.icon}</Text>
                <Text style={styles.label}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MoodModal;

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    padding: 14,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // black opacity
    justifyContent: "flex-end", // modal stays bottom
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6F370F",
  },

  closeBtn: {
    position: "absolute",
    right: 15,
    top: 10,
    zIndex: 10,
  },

  closeText: {
    fontSize: 12,
    backgroundColor: "#FBF7F2",
    padding: 7,
    fontWeight: "bold",
    color: "#333",
    borderRadius: 20,
  },

  // 🔥 2 column grid
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  // 🔥 card style
  card: {
    width: "48%", // 2 column
    borderWidth: 1,
    borderColor: "#B1ACAC",
    borderRadius: 12,
    gap: 3,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 2,
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#FBF7F2",
  },

  icon: {
    fontSize: 20,
    marginBottom: 5,
  },

  label: {
    fontSize: 13,
    color: "#444",
    fontWeight: "500",
  },

  saveBtn: {
    backgroundColor: "#7a3f16",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
  },
});
