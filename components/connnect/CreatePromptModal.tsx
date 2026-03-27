import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import SunIco from "../image/SunIco";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const PRIMARY = "#A16438";
const PRIMARY_DARK = "#6F370F";
const BORDER = "#6F370F";
const LIGHT_BG = "#F8F4EF";
const WHITE = "#FFFFFF";
const TEXT_LIGHT = "#C8BEB6";

const CreatePromptModal = ({ visible, onClose }: Props) => {
  const [selectedTab, setSelectedTab] = useState<"romantic" | "desire">(
    "romantic"
  );
  const [heatLevel, setHeatLevel] = useState(1);
  const [prompt, setPrompt] = useState("");

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Close */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>Create a Prompt</Text>

          {/* Tabs */}
          <View style={styles.segmentWrap}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.segmentBtn,
                selectedTab === "romantic" && styles.segmentBtnActive,
              ]}
              onPress={() => setSelectedTab("romantic")}
            >
              <Text
                style={[
                  styles.segmentText,
                  selectedTab === "romantic" && styles.segmentTextActive,
                ]}
              >
                💞 Romantic
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.segmentBtn,
                selectedTab === "desire" && styles.segmentBtnActive,
              ]}
              onPress={() => setSelectedTab("desire")}
            >
              <Text
                style={[
                  styles.segmentText,
                  selectedTab === "desire" && styles.segmentTextActive,
                ]}
              >
                🔥 Desire
              </Text>
            </TouchableOpacity>
          </View>

          {/* Prompt Label */}
          <Text style={styles.label}>YOUR PROMPT</Text>

          {/* Prompt Input */}
          <TextInput
            value={prompt}
            onChangeText={setPrompt}
            placeholder="Ask something meaningful..."
            placeholderTextColor={TEXT_LIGHT}
            multiline
            textAlignVertical="top"
            style={styles.input}
          />

          {/* Heat Label */}
          <Text style={styles.label}>HEAT LEVEL</Text>

          {/* Heat Buttons */}
          <View style={styles.heatRow}>
            {[1, 2, 3, 4, 5].map((item) => {
              const active = heatLevel === item;
              return (
                <TouchableOpacity
                  key={item}
                  activeOpacity={0.85}
                  style={[styles.heatBtn, active && styles.heatBtnActive]}
                  onPress={() => setHeatLevel(item)}
                >
                  <Text
                    style={[
                      styles.heatText,
                      active && styles.heatTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* CTA */}
          <TouchableOpacity activeOpacity={0.9} style={styles.createBtn}>
            <Text style={styles.createBtnText}>Create Prompt</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CreatePromptModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",

  },

  modal: {
    backgroundColor: WHITE,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 22,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
  },

  closeBtn: {
    position: "absolute",
    right: 14,
    top: 12,
    zIndex: 10,
  },

  closeText: {
    width: 30,
    height: 30,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: LIGHT_BG,
    borderRadius: 999,
    fontSize: 16,
    color: "#C7BEB7",
    lineHeight: 30,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: PRIMARY_DARK,
    marginBottom: 18,
  },

  /* Top segmented tab */
  segmentWrap: {
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: BORDER,
    borderRadius: 999,
    padding: 4,
    marginBottom: 22,
    backgroundColor: "#FFFDFC",
  },

  segmentBtn: {
    flex: 1,
    height: 42,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },

  segmentBtnActive: {
    backgroundColor: PRIMARY,
  },

  segmentText: {
    fontSize: 17,
    fontWeight: "500",
    color: PRIMARY_DARK,
  },

  segmentTextActive: {
    color: WHITE,
  },

  label: {
    fontSize: 14,
    fontWeight: "500",
    color: PRIMARY_DARK,
    marginBottom: 10,
    letterSpacing: 0.2,
  },

  input: {
    height: 92,
    borderWidth: 1.5,
    borderColor: BORDER,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingTop: 14,
    fontSize: 15,
    color: PRIMARY,
    backgroundColor: "#FBF7F2",
    marginBottom: 18,
  },

  heatRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 36,
  },

  heatBtn: {
    width: 64,
    height: 48,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: BORDER,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: WHITE,
  },

  heatBtnActive: {
    backgroundColor: PRIMARY,
    borderColor: PRIMARY,
  },

  heatText: {
    fontSize: 18,
    fontWeight: "500",
    color: PRIMARY_DARK,
  },

  heatTextActive: {
    color: WHITE,
  },

  createBtn: {
    height: 54,
    borderRadius: 18,
    backgroundColor: PRIMARY_DARK,
    justifyContent: "center",
    alignItems: "center",
  },

  createBtnText: {
    color: WHITE,
    fontSize: 18,
    fontWeight: "500",
  },
});