import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Switch,
  ScrollView,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const PRIMARY = "#6F370F";
const BORDER = "#B7835E";
const LIGHT_BG = "#FBF7F2";

const AddMilestoneModal = ({ visible, onClose }: Props) => {
  return (
 <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <ScrollView style={styles.modal}>
          {/* Close */}
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                    <Text style={styles.closeText}>✕</Text>
                  </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>New Milestone</Text>

          {/* LABEL */}
          <Text style={styles.label}>LABEL</Text>
          <View style={styles.selectBox}>
            <Text style={styles.placeholder}>e.g. First Home...</Text>
            <Text style={styles.arrow}>⌄</Text>
          </View>

          {/* Suggestions */}
          <View style={styles.suggestionBox}>
            <Text style={styles.label}>SUGGESTIONS</Text>

            <View
              style={{
                backgroundColor: "#FBF7F2",
                padding: 11,
                borderRadius: 20,
              }}
            >
              {[
                "🏡  Buy a Home",
                "💍  Get Engaged",
                "👶  Have a Baby",
                "🧳  Plan a Vacation",
              ].map((item, index) => (
                <View key={index}>
                  <View style={styles.suggestionItem}>
                    <Text style={styles.suggestionText}>{item}</Text>
                  </View>
                  {index !== 3 && <View style={styles.divider} />}
                </View>
              ))}
            </View>
          </View>

          {/* Add Step */}
          <View style={styles.addRow}>
            <TextInput
              placeholder="+  Add a step..."
              placeholderTextColor="#C7A68A"
              style={styles.input}
            />
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addBtnText}>Add</Text>
            </TouchableOpacity>
          </View>

          {/* Description */}
          <Text style={styles.label}>DESCRIPTION</Text>
          <TextInput
            placeholder="What this means to you..."
            placeholderTextColor="#C7A68A"
            multiline
            style={styles.textArea}
          />

          {/* Private */}
          <View style={styles.privateRow}>
            <View>
              <Text style={styles.privateTitle}>Private Milestone</Text>
              <Text style={styles.privateSub}>Requires PIN to view</Text>
            </View>
            <Switch />
          </View>

          {/* Create Button */}
          <TouchableOpacity style={styles.createBtn}>
            <Text style={styles.createBtnText}>Create Milestone</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default AddMilestoneModal;
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

  label: {
    fontSize: 12,
    fontWeight: "700",
    color: PRIMARY,
    marginBottom: 6,
  },

  selectBox: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 14,
    backgroundColor: LIGHT_BG,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  placeholder: {
    color: "#C7A68A",
  },

  arrow: {
    color: PRIMARY,
    fontSize: 16,
  },

  suggestionBox: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 18,
    padding: 12,

    marginBottom: 14,
  },

  suggestionItem: {
    paddingVertical: 12,
  },

  suggestionText: {
    color: PRIMARY,
    fontSize: 14,
  },

  divider: {
    height: 1,
    backgroundColor: BORDER,
    opacity: 0.4,
  },

  addRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 15,
    backgroundColor: LIGHT_BG,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
  },

  addBtn: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 15,
  },

  addBtnText: {
    color: "#fff",
    fontWeight: "700",
  },

  textArea: {
    borderWidth: 1,
    borderColor: BORDER,
    backgroundColor: LIGHT_BG,
    borderRadius: 16,
    padding: 14,
    height: 90,
    textAlignVertical: "top",
    marginBottom: 10,
  },

  privateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
    borderTopWidth: 1,
    paddingTop: 11,
    borderTopColor: BORDER,
  },

  privateTitle: {
    color: PRIMARY,
    fontWeight: "600",
  },

  privateSub: {
    color: "#A88972",
    fontSize: 12,
  },

  createBtn: {
    backgroundColor: PRIMARY,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },

  createBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
