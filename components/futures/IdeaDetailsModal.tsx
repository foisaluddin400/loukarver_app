import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const PRIMARY = "#6F370F";
const BORDER = "#B7835E";
const LIGHT_BG = "#FBF7F2";
const GREEN = "#008000";

const IdeaDetailsModal: React.FC<Props> = ({ visible, onClose }) => {
  const [steps, setSteps] = useState([
    { id: 1, label: "Talk about ideal city", checked: false },
    { id: 2, label: "Research Neighborhoods", checked: false },
    { id: 3, label: "Visit apartment together", checked: false },
    { id: 4, label: "Agree on a move timeline", checked: false },
    { id: 5, label: "Tell our families", checked: false },
  ]);

  const checkedCount = steps.filter(s => s.checked).length;
  const progress = (checkedCount / steps.length) * 100;

  const toggleStep = (id: number) => {
    setSteps(prev =>
      prev.map(step =>
        step.id === id ? { ...step, checked: !step.checked } : step
      )
    );
  };

  return (
 <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Close */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Move In Together</Text>

          <View style={styles.iconWrap}>
            <Text style={styles.icon}>🏠</Text>
          </View>

          <Text style={styles.subtitle}>
            Building a home together, merging two worlds into one.
          </Text>

          {/* Progress */}
          <View style={styles.progressHeader}>
            <Text style={styles.sectionTitle}>PROGRESS</Text>
            <Text style={styles.progressText}>{progress}%</Text>
          </View>

          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>

          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>STEPS</Text>

          {steps.map(step => (
            <TouchableOpacity
              key={step.id}
              style={styles.stepRow}
              onPress={() => toggleStep(step.id)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.circle,
                  step.checked && {
                    backgroundColor: GREEN,
                    borderColor: GREEN,
                  },
                ]}
              >
                {step.checked && <Text style={styles.check}>✓</Text>}
              </View>
              <Text style={styles.stepText}>{step.label}</Text>
            </TouchableOpacity>
          ))}

          {/* Add Step UI (design only) */}
          <View style={styles.addRow}>
            <TextInput
              placeholder="+  Add a step..."
              placeholderTextColor="#C4B3A6"
              style={styles.input}
            />
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addBtnText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const Step = ({ label, checked = false }: any) => (
  <View style={styles.stepRow}>
    <View
      style={[
        styles.circle,
        checked && { backgroundColor: GREEN, borderColor: GREEN },
      ]}
    >
      {checked && <Text style={styles.check}>✓</Text>}
    </View>
    <Text style={styles.stepText}>{label}</Text>
  </View>
);

export default IdeaDetailsModal;

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
    fontWeight: "700",
    color: PRIMARY,
 
    marginTop: 10,
  },

  iconWrap: {
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    fontSize: 36,
  },

  subtitle: {
    textAlign: "center",
    color: PRIMARY,
    fontSize: 13,
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: PRIMARY,
    letterSpacing: 1,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  progressText: {
    color: GREEN,
    fontWeight: "700",
  },

  progressBar: {
    height: 6,
    backgroundColor: LIGHT_BG,
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    width: "40%",
    height: "100%",
    backgroundColor: "#8BC34A",
  },

  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: BORDER,
  },

  circle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: BORDER,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  check: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },

  stepText: {
    fontSize: 14,
    color: PRIMARY,
  },

  addRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    fontSize: 14,
  },
  addBtn: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 25,
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "400",
  },
});