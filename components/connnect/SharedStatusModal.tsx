import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const PRIMARY = "#6F370F";
const BORDER = "#B7835E";
const LIGHT_BG = "#FBF7F2";

const SharedStatusModal = ({ visible, onClose }: Props) => {
  return (
 <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Close */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>Morning Workout</Text>
<View style={{flexDirection:'row', justifyContent:'center'}}><Text style={{fontSize:60}}>🏃</Text></View>
          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.passBtn}>
              <Text style={styles.passText}>Lau</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.passBtn}>
              <Text style={styles.passText}>Amanda</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.passBtn}>
              <Text style={styles.passText}>Mark Done ✔️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.passBtn}>
              <Text style={styles.passText}>Pass ⚠️</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SharedStatusModal;
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
  btnRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },

  acceptBtn: {
    backgroundColor: PRIMARY,
    flex: 1,
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  acceptText: {
    color: "#fff",
    fontWeight: "600",
  },

  passBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#B7835E",
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  passText: {
    color: PRIMARY,
    fontWeight: "600",
  },
});
