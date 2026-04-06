import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
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
  onPass: () => void;
  onAccept: () => void;
};

const PRIMARY = "#6F370F";

const IdeaModal: React.FC<Props> = ({ visible, selectedIdea, onPass, onAccept }) => {
  return (
   <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.closeBtn} onPress={onPass}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>{selectedIdea?.title}</Text>
            <Text style={styles.location}>📍 {selectedIdea?.location}</Text>

            <View style={styles.tagRow}>
              {selectedIdea?.tags.map((t) => (
                <Text key={t} style={styles.tag}>{t}</Text>
              ))}
            </View>

            <Text style={styles.sectionTitle}>VENUES</Text>

            {["A hidden gem cafe", "Local art space", "Rooftop bar with views"].map((item, i) => (
              <View key={i} style={styles.venueItem}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>{i + 1}</Text>
                </View>
                <Text style={styles.venueText}>{item}</Text>
              </View>
            ))}

            <Text style={styles.sectionTitle}>TIMELINE</Text>

            {["Start with something simple", "Build connection over shared experience", "End with something memorable"].map((t, i) => (
              <View key={i} style={styles.timelineRow}>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.timelineText}>{t}</Text>
              </View>
            ))}

            <View style={styles.card}>
              <Text style={styles.cardTitle}>💬 Conversation Starter</Text>
              <Text style={styles.cardText}>
                What's a simple joy that never gets old for you?
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>✨ Surprise Tip</Text>
              <Text style={styles.cardText}>
                Put your phones away for the first hour completely.
              </Text>
            </View>

            <View style={styles.btnRow}>
              <TouchableOpacity style={styles.acceptBtn} onPress={onAccept}>
                <Text style={styles.acceptText}>Accept </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.passBtn} onPress={onPass}>
                <Text style={styles.passText}>Pass</Text>
              </TouchableOpacity>
 <TouchableOpacity style={styles.passBtn} onPress={onPass}>
                <Text style={styles.passText}>Edit</Text>
              </TouchableOpacity>
              
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default IdeaModal;

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
    backgroundColor: "#EFE6DD",
    padding: 6,
    borderRadius: 20,
    fontSize: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: PRIMARY,
    marginBottom: 6,
    marginTop: 10,
  },
  location: {
    color: "#7a7a7a",
    marginBottom: 12,
  },

  tagRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 15,
  },
  tag: {
    backgroundColor: "#FBF7F2",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    color: PRIMARY,
    fontSize: 12,
  },

  sectionTitle: {
    fontSize: 12,
    color: PRIMARY,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 8,
  },

  venueItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FBF7F2",
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 20,
    backgroundColor: "#B7835E",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  circleText: {
    color: "#fff",
    fontWeight: "700",
  },
  venueText: {
    color: PRIMARY,
  },

  timelineRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  dot: {
    marginRight: 6,
    color: PRIMARY,
  },
  timelineText: {
    color: PRIMARY,
  },

  card: {
    borderWidth: 1,
    backgroundColor:'#FBF7F2',
    borderColor: "#B7835E",
    padding: 12,
    borderRadius: 12,
    marginTop: 12,
  },
  cardTitle: {
    color: PRIMARY,
    fontWeight: "600",
    marginBottom: 4,
  },
  cardText: {
    color: "#7A6A5A",
    fontSize: 12,
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
