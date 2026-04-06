import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import SunIco from "../image/SunIco";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const PRIMARY = "#6F370F";
const BORDER = "#B7835E";
const LIGHT_BG = "#FBF7F2";

const GoodNightModal = ({ visible, onClose }: Props) => {
  return (
 <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Close */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>Good Night Ritual</Text>
          <Text style={{textAlign:'center', color:'#D9D6D6'}}>ROSE, THORN & BUD</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ fontSize: 60 }}><SunIco></SunIco></Text>
          </View>
          <Text style={{ marginBottom: 5, fontWeight: "600", color: "#6F370F" }}>
          🌷 ROSE - BEST PART OF YOUR DAY
        </Text>
        <TextInput
          placeholder="Something Good Today.."
          style={{
            borderWidth: 1,
            backgroundColor: "#FBF7F2",
            borderColor: "#B7835E",
            borderRadius: 15,
            padding: 10,
             marginBottom:17
          }}
        />



 <Text style={{ marginBottom: 5, fontWeight: "600", color: "#6F370F", }}>
          🌷 ROSE - BEST PART OF YOUR DAY
        </Text>
        <TextInput
          placeholder="Something difficult.."
          style={{
            borderWidth: 1,
            backgroundColor: "#FBF7F2",
            borderColor: "#B7835E",
            borderRadius: 15,
            padding: 10,
            marginBottom:17
          }}
        />



         <Text style={{ marginBottom: 5, fontWeight: "600", color: "#6F370F" }}>
          🌷 ROSE - BEST PART OF YOUR DAY
        </Text>
        <TextInput
          placeholder="Something Hopeful.."
          style={{
            borderWidth: 1,
            backgroundColor: "#FBF7F2",
            borderColor: "#B7835E",
            borderRadius: 15,
            padding: 10,
          }}
        />


        <TouchableOpacity style={styles.saveBtn}>
          <Text style={{ color: "#fff" }}>Share Good Night 🌙</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GoodNightModal;
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
   saveBtn: {
    backgroundColor: "#7a3f16",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  passText: {
    color: PRIMARY,
    fontWeight: "600",
  },
});
