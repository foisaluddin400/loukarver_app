import React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};
const PRIMARY = "#6F370F";
const BORDER = "#B7835E";
const LIGHT_BG = "#FBF7F2";
const data = ["🍕", "🍕", "🍕", "🍕", "🍕", "🍕", "🍕"];
const AddDateModal = ({ visible, onClose }: Props) => {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
    
          <Text style={styles.title}>Add Important Date</Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 10,
              padding: 10,
            }}
          >
            {data.map((item, index) => (
              <View
                key={index}
                style={{
                  aspectRatio: 1,
                  borderWidth: 1,
                  borderColor: "#B7835E",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 24 }}>{item}</Text>
              </View>
            ))}
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text
              style={{ marginBottom: 5, fontWeight: "600", color: "#6F370F" }}
            >
              Title
            </Text>
            <TextInput
              placeholder="e.g our First Trip"
              style={{
                borderWidth: 1,
                backgroundColor: "#FBF7F2",
                borderColor: "#B7835E",
                borderRadius: 15,
                padding: 10,
              }}
            />
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text
              style={{ marginBottom: 5, fontWeight: "600", color: "#6F370F" }}
            >
              Date
            </Text>
            <TextInput
              placeholder="e.g date"
              style={{
                borderWidth: 1,
                borderColor: "#B7835E",
                backgroundColor: "#FBF7F2",
                borderRadius: 15,
                padding: 10,
              }}
            />
          </View>

          <TouchableOpacity style={styles.saveBtn}>
            <Text style={{ color: "#fff" }}>Save Date</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddDateModal;

const styles = StyleSheet.create({
 overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
  },

  closeBtn: {
    position: "absolute",
    right: 15,
    top: 10,
    zIndex: 10,
  },
  closeText: {
    backgroundColor: LIGHT_BG,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 14,
  },
 title: {
    fontSize: 20,
    fontWeight: "500",
    color: PRIMARY,
    marginBottom: 18,
  },
  saveBtn: {
    backgroundColor: "#7a3f16",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
  },
});
