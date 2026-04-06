import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const AddMemoryModal = ({ visible, onClose }: Props) => {
  return (
     <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                  <Text style={styles.closeText}>✕</Text>
                </TouchableOpacity>

        <Text style={styles.modalTitle}>Add a Memory</Text>

        <View style={styles.iconRow}>
          {["🌙", "🍕", "✈️", "❤️", "🎉", "📷", "🌴", "💑"].map((i) => (
            <Text key={i} style={styles.iconBig}>
              {i}
            </Text>
          ))}
        </View>

        <Text style={{ marginBottom: 5, fontWeight: "600", color: "#6F370F" }}>
          Memory
        </Text>
        <TextInput
          placeholder="Description"
          style={{
            borderWidth: 1,
            backgroundColor: "#FBF7F2",
            borderColor: "#B7835E",
            borderRadius: 15,
            padding: 10,
          }}
        />

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={{ color: "#fff" }}>Save Memory</Text>
        </TouchableOpacity>
      </View>
      </View>
    </Modal>
  );
};

export default AddMemoryModal;

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
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },


  closeBtn: {
    position: "absolute",
    right: 15,
    top: 10,
    zIndex: 10,
  },
  closeText: {
    backgroundColor: '#FBF7F2',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 14,
  },



  bottomModal: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "90%",
  },

  modalTitle: {
    fontSize: 18,
    marginBottom: 15,
    color: "#6F370F",
    fontWeight: "600",
  },
  iconRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },

  iconBig: {
    fontSize: 30,
    margin: 10,

    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#B7835E",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  saveBtn: {
    backgroundColor: "#7a3f16",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
});
