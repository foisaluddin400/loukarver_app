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
  messages: string[];
  msgInput: string;
  setMsgInput: (val: string) => void;
  sendMessage: () => void;
};

const AppreciationModal: React.FC<Props> = ({
  visible,
  onClose,
  messages,
  msgInput,
  setMsgInput,
  sendMessage,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.bottomModal}>
        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>

        <Text style={styles.modalTitle}>Send Appreciation</Text>

        <ScrollView style={{ maxHeight: 200 }}>
          {messages.map((m, i) => (
            <View
              key={i}
              style={[
                styles.chatBubble,
                i % 2 ? styles.rightBubble : styles.leftBubble,
              ]}
            >
              <Text style={{ color: "#fff" }}>{m}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.chatInputRow}>
          <TextInput
            placeholder="Type message..."
            style={styles.chatInput}
            value={msgInput}
            onChangeText={setMsgInput}
          />
          <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
            <Text style={{ color: "#fff" }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AppreciationModal;

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
    fontWeight: "600",
  },
  chatBubble: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: "70%",
  },
  leftBubble: {
    backgroundColor: "#7a3f16",
    alignSelf: "flex-start",
  },
  rightBubble: {
    backgroundColor: "#b47a4c",
    alignSelf: "flex-end",
  },
  chatInputRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  chatInput: {
    borderWidth: 1,
    borderColor: "#B7835E",
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#FBF7F2",
    marginTop: 5,
    flex: 1,
  },
  sendBtn: {
    backgroundColor: "#7a3f16",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: "center",
  },
});