import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const PRIMARY = "#6F370F";
const BORDER = "#B7835E";
const LIGHT_BG = "#FBF7F2";

const AddDestination = ({ visible, onClose }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<"Past" | "Upcoming" | "Bucket List">("Past");

  const [city, setCity] = useState("");
  const [note, setNote] = useState("");
  const [dates, setDates] = useState("");   // Only for Upcoming

  const categories = [
    { label: "Past" },
    { label: "Upcoming" },
    { label: "Bucket List" },
  ] as const;

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          
          {/* Close Button */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>Add Destination</Text>

          {/* Category Tabs */}
          <View style={styles.categoryRow}>
            {categories.map((item) => {
              const active = selectedCategory === item.label;
              return (
                <TouchableOpacity
                  key={item.label}
                  activeOpacity={0.85}
                  style={[styles.categoryBtn, active && styles.categoryBtnActive]}
                  onPress={() => setSelectedCategory(item.label)}
                >
                  <Text style={[styles.categoryText, active && styles.categoryTextActive]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Form Fields */}
          <View style={styles.formContainer}>
            <Text style={styles.label}>CITY / DESTINATION</Text>
            <TextInput
              value={city}
              onChangeText={setCity}
              placeholder="e.g. Paris, France"
              style={styles.input}
            />

            <Text style={styles.label}>NOTE</Text>
            <TextInput
              value={note}
              onChangeText={setNote}
              placeholder="Write a short note..."
              multiline
              numberOfLines={3}
              style={[styles.input, styles.noteInput]}
            />

            {/* Only show Dates field for Upcoming */}
            {selectedCategory === "Upcoming" && (
              <>
                <Text style={styles.label}>DATES</Text>
                <TextInput
                  value={dates}
                  onChangeText={setDates}
                  placeholder="e.g. March 20 - 27, 2026"
                  style={styles.input}
                />
              </>
            )}
          </View>

          {/* Add Button */}
          <TouchableOpacity style={styles.createBtn} onPress={() => {
            // You can add your save logic here
            console.log({ selectedCategory, city, note, dates });
            onClose();
          }}>
            <Text style={styles.createBtnText}>Add To Our Map</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",

  },
  modal: {
    backgroundColor: "white",
    padding:12,
    paddingTop: 20,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    minHeight: 480,
  },
  closeBtn: {
    position: "absolute",
    right: 20,
    top: 18,
    zIndex: 10,
  },
  closeText: {
    backgroundColor: LIGHT_BG,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    fontSize: 16,
    color: PRIMARY,
  },
  title: {
      fontSize: 20,
    fontWeight: "500",
    color: PRIMARY,
    marginBottom: 18,
  
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    gap: 8,
  },
  categoryBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: BORDER,
    backgroundColor: "#fff",
  },
  categoryBtnActive: {
    backgroundColor: PRIMARY,
    borderColor: PRIMARY,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: "600",
    color: PRIMARY,
  },
  categoryTextActive: {
    color: "#fff",
  },
  formContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: PRIMARY,
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: LIGHT_BG,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  noteInput: {
    height: 100,
    textAlignVertical: "top",
  },
  createBtn: {
    backgroundColor: PRIMARY,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: "auto",
  },
  createBtnText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 17,
  },
});

export default AddDestination;