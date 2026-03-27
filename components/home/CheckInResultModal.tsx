import React from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import CheckInIco from "../image/CheckInIco";

const screenWidth = Dimensions.get("window").width;

type Props = {
  visible: boolean;
  onClose: () => void;
  feelingInput: string;
  needsInput: string;
  thinkingInput: string;
};

const CheckInResultModal: React.FC<Props> = ({
  visible,
  onClose,
  feelingInput,
  needsInput,
  thinkingInput,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.bottomModal}>
        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>

        <ScrollView>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <CheckInIco />
              </View>
              <Text style={{ marginTop: 8, marginBottom: 9 }}>
                Thanks For Sharing your Feelings Lou!
              </Text>
            </View>
          </View>

          <Text style={styles.modalTitle}>Amanda's Check In ❤️</Text>

          <View style={styles.resultCard}>
            <Text style={{ color: "#6F370F", marginBottom: 11, textAlign: "center" }}>
              Talk about how she's feeling and offer support.
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#B7835E",
                marginTop: 12,
              }}
            >
              <Text style={styles.label}>Feeling:</Text>
              <Text style={styles.staticText}>
                {feelingInput || "Tired but content 🥱"}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#B7835E",
                marginVertical: 5,
                marginTop: 12,
              }}
            >
              <Text style={styles.label}>Needs:</Text>
              <Text style={styles.staticText}>
                {needsInput || "A long hug and a good laugh 💌"}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#B7835E",
                marginTop: 12,
              }}
            >
              <Text style={styles.label}>Thinking:</Text>
              <Text style={styles.staticText}>
                {thinkingInput || "Excited about our next visit ❤️"}
              </Text>
            </View>

            {/* Mood chart */}
            <LineChart
              data={{
                labels: ["5 days ago", "3 days ago", "Today"],
                datasets: [{ data: [2, 5, 8] }],
              }}
              width={screenWidth - 60}
              height={200}
              yAxisSuffix=""
              chartConfig={{
                backgroundGradientFrom: "#FBF7F2",
                backgroundGradientTo: "#FBF7F2",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(111, 55, 15, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(111, 55, 15, ${opacity})`,
                style: { borderRadius: 16 },
                propsForDots: { r: "6", strokeWidth: "2", stroke: "#B7835E" },
              }}
              style={{
                marginVertical: 12,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "#B7835E",
              }}
            />

            <Text style={{ color: "#6F370F", marginTop: 5, textAlign: "center" }}>
              Talk about how she's feeling and offer support.
            </Text>
          </View>

          <TouchableOpacity style={styles.saveBtn}>
            <Text style={{ color: "#fff" }}>Respond to Amanda</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default CheckInResultModal;

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
  label: { fontWeight: "600", marginTop: 10, color: "#6F370F" },
  staticText: {
    color: "#6F370F",
    marginBottom: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 6,
    borderWidth: 1,
    borderColor: "#B7835E",
  },
  resultCard: {
    backgroundColor: "#FBF7F2",
    borderWidth: 1,
    borderColor: "#B7835E",
    padding: 15,
    color: "#6F370F",
    borderRadius: 16,
  },
  saveBtn: {
    backgroundColor: "#7a3f16",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
});