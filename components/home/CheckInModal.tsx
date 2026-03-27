import React from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onShare: () => void;
};

const CheckInModal: React.FC<Props> = ({ visible, onClose, onShare }) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.bottomModal}>
        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>

        <ScrollView>
          <Text style={styles.modalTitle}>Check In</Text>
          <View
            style={{
              backgroundColor: "#FBF7F2",
              borderWidth: 1,
              borderColor: "#B7835E",
              padding: 9,
              borderRadius: 16,
            }}
          >
            <Text style={styles.label}>AMANDA'S CHECK IN</Text>
            <Text style={styles.label}>How she feeling</Text>
            <Text style={styles.staticText}>Tired but content</Text>

            <Text style={styles.label}>What she needs</Text>
            <Text style={styles.staticText}>Support</Text>

            <Text style={styles.label}>On her mind</Text>
            <Text style={styles.staticText}>Work stress</Text>

            <Text style={styles.modalTitle}>Your check in Lou</Text>

            <Text
              style={{ marginBottom: 5, fontWeight: "600", color: "#6F370F" }}
            >
              HOW ARE YOU FEELING?
            </Text>
            <TextInput
              placeholder="How are you feeling?"
              style={styles.chatInput}
            />
            <Text
              style={{
                marginBottom: 5,
                marginTop: 11,
                fontWeight: "600",
                color: "#6F370F",
              }}
            >
              WHAT DO YOU NEED
            </Text>
            <TextInput
              placeholder="What do you need?"
              style={styles.chatInput}
            />
            <Text
              style={{
                marginBottom: 5,
                marginTop: 11,
                fontWeight: "600",
                color: "#6F370F",
              }}
            >
              ONE THING ON YOUR MINE?
            </Text>
            <TextInput
              placeholder="One thing on your mind"
              style={styles.chatInput}
            />
          </View>

          <TouchableOpacity style={styles.saveBtn} onPress={onShare}>
            <Text style={{ color: "#fff" }}>Share Check In</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default CheckInModal;

const styles = StyleSheet.create({
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
  closeBtn: { position: "absolute", right: 15, top: 10, zIndex: 10 },
  closeText: {
    fontSize: 12,
    backgroundColor: "#FBF7F2",
    padding: 7,
    fontWeight: "bold",
    color: "#333",
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 15,
    color: "#6F370F",
   
  },
  label: {  marginTop: 10, color: "#6F370F" },
  staticText: {
    color: "#6F370F",
    marginBottom: 5,
   fontWeight: "600",
  },
  chatInput: {
    borderWidth: 1,
    borderColor: "#B7835E",
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#FBF7F2",
    marginTop: 5,
  },
  saveBtn: {
    backgroundColor: "#7a3f16",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
});