import React from "react";
import {
  Modal,
  Animated,
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
const EditDateModal = ({ visible, onClose }: Props) => {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Edit Reunion Date</Text>

          <View style={{ marginBottom: 15 }}>
            <Text
              style={{ marginBottom: 5, fontWeight: "600", color: "#6F370F" }}
            >
              Next Visit Date
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

          <TouchableOpacity style={styles.saveBtn} >
            <Text style={{ color: "#fff" }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EditDateModal;

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
