import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import AppreciationModal from "./AppreciationModal";
import CheckInModal from "./CheckInModal";
import CheckInResultModal from "./CheckInResultModal";
import AddMemoryModal from "./AddMemoryModal";

const EmotionalRecent: React.FC = () => {
  const [chatModal, setChatModal] = useState<boolean>(false);
  const [checkModal, setCheckModal] = useState<boolean>(false);
  const [checkResultModal, setCheckResultModal] = useState<boolean>(false);
  const [feelingInput, setFeelingInput] = useState("");
  const [needsInput, setNeedsInput] = useState("");
  const [thinkingInput, setThinkingInput] = useState("");
  const [memoryModal, setMemoryModal] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [msgInput, setMsgInput] = useState<string>("");

  const shareCheckIn = () => {
    setCheckModal(false);
    setCheckResultModal(true);
  };

  const sendMessage = () => {
    if (!msgInput) return;
    setMessages([...messages, msgInput]);
    setMsgInput("");
  };

  return (
    <View style={styles.container}>
      {/* EMOTIONAL PULSE */}
      <Text style={styles.sectionTitle}>EMOTIONAL PULSE</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => setChatModal(true)}
        >
          <Text style={styles.icon}>💌</Text>
          <Text>Send Appreciation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => setCheckModal(true)}
        >
          <Text style={styles.icon}>❤️</Text>
          <Text>Check In</Text>
        </TouchableOpacity>
      </View>

      {/* RECENT MEMORIES */}
      <View style={styles.memoryHeader}>
        <Text style={styles.sectionTitle}>RECENT MEMORIES</Text>

        <TouchableOpacity
          style={styles.addMemory}
          onPress={() => setMemoryModal(true)}
        >
          <Text>+ Add Memory</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.memoryCard}>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#B7835E" }}>
          <View style={styles.divider}><Text style={{fontSize:30 ,marginTop:-11}}>🌙</Text><View>
            <Text style={styles.memoryItem}> Midnight call in the rain</Text>
          <Text style={styles.date}>Jan 14</Text></View></View>
        </View>

        <View style={{ borderBottomWidth: 1, borderBottomColor: "#B7835E" }}>
          <View style={styles.divider}><Text style={{fontSize:30 ,marginTop:-11}}>🍕</Text><View>
            <Text style={styles.memoryItem}> Pizza night over face time</Text>
          <Text style={styles.date}>Jan 14</Text></View></View>
        </View>

        <View style={{ borderBottomWidth: 1, borderBottomColor: "#B7835E" }}>
          <View style={styles.divider}><Text style={{fontSize:30 ,marginTop:-11}}>✈️</Text><View>
            <Text style={styles.memoryItem}> First airport goodbye</Text>
          <Text style={styles.date}>Jan 14</Text></View></View>
        </View>
      </View>

      {/* MODALS */}
      <AppreciationModal
        visible={chatModal}
        onClose={() => setChatModal(false)}
        messages={messages}
        msgInput={msgInput}
        setMsgInput={setMsgInput}
        sendMessage={sendMessage}
      />

      <CheckInModal
        visible={checkModal}
        onClose={() => setCheckModal(false)}
        onShare={shareCheckIn}
      />

      <CheckInResultModal
        visible={checkResultModal}
        onClose={() => setCheckResultModal(false)}
        feelingInput={feelingInput}
        needsInput={needsInput}
        thinkingInput={thinkingInput}
      />

      <AddMemoryModal
        visible={memoryModal}
        onClose={() => setMemoryModal(false)}
      />
    </View>
  );
};

export default EmotionalRecent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 11,
  },
  sectionTitle: {
    fontWeight: "500",
    color: "#6F370F",
    marginBottom: 10,
    marginTop: 10,
  },
  divider:{
flexDirection:'row',
alignItems:'center',
gap:5,
paddingVertical:5

  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#C2705A80",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    fontSize: 24,
    marginBottom: 5,
  },
  memoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  addMemory: {
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 10,
    borderRadius: 10,
  },
  memoryCard: {
    borderWidth: 1,
    borderColor: "#B7835E",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 10,
  },
  memoryItem: {
    fontSize: 16,
  
  },
  date: {
    color: "#777",
    marginBottom: 10,
  },
});
