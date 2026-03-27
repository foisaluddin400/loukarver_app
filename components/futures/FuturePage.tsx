import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomeIco from "../image/HomeIco";
import IdeaDetailsModal from "./IdeaDetailsModal";
import AddMileston from "./AddMileston";

const FuturePage = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Future</Text>
      <Text style={styles.subtitle}>Dreams you building together</Text>

      {/* Card 1 */}
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={[styles.card, styles.greenBorder]}>
          <View style={styles.rowBetween}>
            <View style={styles.dividet}>
              <View>
                <HomeIco></HomeIco>
              </View>
              <View>
                <Text style={styles.cardTitle}> Move In Together</Text>
                <Text style={styles.steps}>2/5 steps</Text>
              </View>
            </View>
            <Text style={styles.percent}>40%</Text>
          </View>
          <View style={styles.progressBg}>
            <View
              style={[
                styles.progressFill,
                { width: "40%", backgroundColor: "#00800080" },
              ]}
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* Card 2 */}
      <View style={[styles.card, styles.yellowBorder]}>
        <View style={styles.rowBetween}>
          <View style={styles.dividet}>
            <View>
              <HomeIco></HomeIco>
            </View>
            <View>
              <Text style={styles.cardTitle}> Meet the family</Text>
              <Text style={styles.steps}>2/5 steps</Text>
            </View>
          </View>
          <Text style={styles.percent}>80%</Text>
        </View>
        <View style={styles.progressBg}>
          <View
            style={[
              styles.progressFill,
              { width: "80%", backgroundColor: "#E5B75C" },
            ]}
          />
        </View>
      </View>

      {/* Card 3 */}
      <View style={[styles.card, styles.redBorder]}>
        <View style={styles.rowBetween}>
          <View style={styles.dividet}>
            <View>
              <HomeIco></HomeIco>
            </View>
            <View>
              <Text style={styles.cardTitle}> Marriage</Text>
              <Text style={styles.steps}>2/5 steps</Text>
            </View>
          </View>
          <Text style={styles.percent}>20%</Text>
        </View>
        <View style={styles.progressBg}>
          <View
            style={[
              styles.progressFill,
              { width: "20%", backgroundColor: "#D47A7A" },
            ]}
          />
        </View>
      </View>

      {/* Card 4 */}
      <View style={[styles.card, styles.pinkBorder]}>
        <View style={styles.rowBetween}>
          <View style={styles.dividet}>
            <View>
              <HomeIco></HomeIco>
            </View>
            <View>
              <Text style={styles.cardTitle}> Kids</Text>
              <Text style={styles.steps}>1/5 steps</Text>
            </View>
          </View>
          <Text style={styles.percent}>20%</Text>
        </View>
        <View style={styles.progressBg}>
          <View
            style={[
              styles.progressFill,
              { width: "20%", backgroundColor: "#E6A0B5" },
            ]}
          />
        </View>
      </View>

      <IdeaDetailsModal visible={open} onClose={() => setOpen(false)} />

      {/* Create Button */}
      <TouchableOpacity onPress={() => setOpen1(true)}>
        <View style={styles.createBox}>
          <Text style={styles.createText}>＋ Create your own milestone</Text>
        </View>
      </TouchableOpacity>

      <AddMileston visible={open1} onClose={() => setOpen1(false)} />
    </View>
  );
};

export default FuturePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#6F370F",
    marginBottom: 4,
  },
  dividet: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 4,
  },
  subtitle: {
    color: "#6F370F",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 17,
    marginBottom: 14,
    borderWidth: 1,
  },
  greenBorder: {
    borderColor: "#00800080",
    borderLeftWidth: 5,
  },
  yellowBorder: {
    borderColor: "#E5B75C",
    borderLeftWidth: 5,
  },
  redBorder: {
    borderColor: "#D47A7A",
    borderLeftWidth: 5,
  },
  pinkBorder: {
    borderColor: "#E6A0B5",
    borderLeftWidth: 5,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#6F370F",
  },
  steps: {
    color: "#9B6A3A",
    fontSize: 12,
    marginTop: 2,
  },
  percent: {
    color: "#00800080",
    fontWeight: "700",
  },
  progressBg: {
    height: 6,
    backgroundColor: "#EAE3DC",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: 6,
    borderRadius: 10,
  },
  createBox: {
    marginTop: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#C9A98B",
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
  },
  createText: {
    color: "#6F370F",
    fontWeight: "500",
  },
});
