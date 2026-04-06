import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Switch,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const PRIMARY = "#6F370F";
const BORDER = "#B7835E";
const LIGHT_BG = "#FBF7F2";

const StatusModalMap = ({ visible, onClose }: Props) => {
  return (
 <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Close */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>Los Angeles, US</Text>
<View style={styles.pastBadge}>
        <Text style={styles.pastText}>Past</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Where it all began. Our home base.
      </Text>

      {/* PHOTOS Section */}
      <Text style={styles.sectionTitle}>PHOTOS</Text>
      
      <View style={styles.photosContainer}>
        {/* Photo 1 - City Building */}
        <View style={styles.photoCard}>
          <Text style={styles.photoIcon}>🏙️</Text>
        </View>

        {/* Photo 2 - Beach */}
        <View style={styles.photoCard}>
          <Text style={styles.photoIcon}>🏖️</Text>
        </View>

        {/* Photo 3 - Boat */}
        <View style={styles.photoCard}>
          <Text style={styles.photoIcon}>⛵</Text>
        </View>

        {/* Add Photo */}
        <TouchableOpacity style={styles.addPhotoCard}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Best Memory Section */}
      <View style={styles.bestMemoryContainer}>
        <Text style={styles.bestMemoryTitle}>BEST MEMORY</Text>
        <Text style={styles.bestMemoryText}>
          Late night drives on Mulholland, the whole city glittering below...
        </Text>
      </View>
        </View>
      </View>
    </Modal>
  );
};

export default StatusModalMap;
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
pastBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#E0F2E9",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12,
  },
  pastText: {
    color: "#1E8A6B",
    fontSize: 14,
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    color: "#444444",
    lineHeight: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#6F370F",
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  photosContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 32,
  },
  photoCard: {
    width: 85,
    height: 85,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8D9C8",
  },
  photoIcon: {
    fontSize: 36,
  },
  addPhotoCard: {
    width: 85,
    height: 85,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#C9A47E",
  },
  addIcon: {
    fontSize: 32,
    color: "#C9A47E",
    fontWeight: "300",
  },
  bestMemoryContainer: {
    backgroundColor: "#FFF9F0",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E8D9C8",
  },
  bestMemoryTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6F370F",
    marginBottom: 8,
    letterSpacing: 0.8,
  },
  bestMemoryText: {
    fontSize: 15,
    color: "#5C4635",
    lineHeight: 22,
  },
  
});
