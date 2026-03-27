import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type DateIdea = {
  title: string;
  location: string;
  tags: string[];
  badge: "Proposed" | "Accepted" | "Completed";
  stars?: string;
};

type Props = {
  visible: boolean;
  selectedIdea: DateIdea | null;
  selectedRating: number;
  setSelectedRating: (val: number) => void;
  onDone: () => void;
};

const RatingModal: React.FC<Props> = ({
  visible,
  selectedIdea,
  selectedRating,
  setSelectedRating,
  onDone,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.bottomModal}>
          <TouchableOpacity style={styles.closeBtn} onPress={onDone}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          <Text style={styles.modalTitle}>Rating🌟</Text>
          

          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => setSelectedRating(star)}>
                <Text
                  style={[
                    styles.starIcon,
                    { color: star <= selectedRating ? "#FFA500" : "#D6C5B8" },
                  ]}
                >
                  ★
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.acceptBtn} onPress={onDone}>
            <Text style={styles.acceptBtnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RatingModal;

const PRIMARY = "#6F370F";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bottomModal: {
    backgroundColor: "#fff",
    padding: 12,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  closeBtn: {
    position: "absolute",
    right: 15,
    top: 10,
    zIndex: 10,
  },
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
    fontWeight: "700",
    color: PRIMARY,
    marginBottom: 6,
    marginTop: 10,
  },
  modalLocation: {
    color: "#7a7a7a",
    marginBottom: 12,
  },
  starsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginVertical: 24,
  },
  starIcon: {
    fontSize: 40,
  },
  acceptBtn: {
    flex: 1,
    backgroundColor: PRIMARY,
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  acceptBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
});