import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import GenerateIco from "../image/GenerateIco";
import IdeaModal from "./IdeaModal";
import RatingModal from "./RatingModal";

type DateIdea = {
  title: string;
  location: string;
  tags: string[];
  badge: "Proposed" | "Accepted" | "Completed";
  stars?: string;
};

const DateGenerator: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState("Romantic");
  const [selectedVibe, setSelectedVibe] = useState("Cozy");
  const [selectedTime, setSelectedTime] = useState("Evening");
  const [selectedBudget, setSelectedBudget] = useState("Budget Friendly");

  const [ideaModal, setIdeaModal] = useState(false);
  const [ratingModal, setRatingModal] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<DateIdea | null>(null);
  const [selectedRating, setSelectedRating] = useState(0);

  const ideas: DateIdea[] = [
    {
      title: "Cozy Evening in Los Angeles",
      location: "Los Angeles",
      tags: ["Evening", "Romantic", "Splurge"],
      badge: "Proposed",
    },
    {
      title: "Late Night Jazz & Cocktails",
      location: "Los Angeles",
      tags: ["Late Night", "Spontaneous", "Splurge"],
      badge: "Accepted",
    },
    {
      title: "Golden Hour Picnic",
      location: "Los Angeles",
      tags: ["Evening", "Romantic", "Moderate"],
      badge: "Completed",
      stars: "★★★★★",
    },
  ];

  const openIdeaModal = (idea: DateIdea) => {
    setSelectedIdea(idea);
    setSelectedRating(0);
    setIdeaModal(true);
  };

  const handleAccept = () => {
    setIdeaModal(false);
    setRatingModal(true);
  };

  const handlePass = () => {
    setIdeaModal(false);
    setSelectedIdea(null);
  };

  const handleRatingDone = () => {
    setRatingModal(false);
    setSelectedIdea(null);
    setSelectedRating(0);
  };

 const renderButton = (item: string, selected: string, setFn: any) => (
  <TouchableOpacity
    key={item}
    onPress={() => setFn(item)}
    style={[styles.chip, selected === item && styles.chipActive]}
  >
      <Text style={[styles.chipText, selected === item && styles.chipTextActive]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const getBadgeStyle = (badge: DateIdea["badge"]) => {
    if (badge === "Proposed") return styles.badgeRed;
    if (badge === "Accepted") return styles.badgeGreen;
    return styles.badgeDone;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Date Generator</Text>

      <Text style={styles.label}>CITY</Text>
      <TextInput
        placeholder="Where?"
        style={styles.input}
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>MOOD</Text>
      <View style={styles.rowWrap}>
        {["Romantic", "Adventurous", "Cozy", "Playful", "Spontaneous"].map((item) => (
  <React.Fragment key={item}>
    {renderButton(item, selectedMood, setSelectedMood)}
  </React.Fragment>
))}
      </View>

      <Text style={styles.label}>VIBE</Text>
      <View style={styles.rowWrap}>
        {["Cozy", "Artsy", "Outdoors", "Foodie", "Luxe", "Hidden Gems"].map((item) =>
          renderButton(item, selectedVibe, setSelectedVibe)
        )}
      </View>

      <Text style={styles.label}>TIME OF DAY</Text>
      <View style={styles.rowWrap}>
        {["Morning", "Afternoon", "Evening", "Night", "Late Night"].map((item) =>
          renderButton(item, selectedTime, setSelectedTime)
        )}
      </View>

      <Text style={styles.label}>START TIME</Text>
      <View style={styles.timeBox}>
        <Text style={styles.timeText}>9:00 PM</Text>
      </View>

      <Text style={styles.label}>BUDGET</Text>
      <View style={styles.rowWrap}>
        {["Budget Friendly", "Moderate", "Splurge"].map((item) =>
          renderButton(item, selectedBudget, setSelectedBudget)
        )}
      </View>

      <TouchableOpacity style={styles.mainBtn}>
        <Text style={styles.mainBtnText}>Generate Date  </Text>
        <GenerateIco />
      </TouchableOpacity>

      <Text style={styles.label}>DATES IDEAS</Text>

      {ideas.map((idea) => (
  <TouchableOpacity
    key={idea.title}
    style={styles.card}
    onPress={() => openIdeaModal(idea)}
    activeOpacity={0.8}
  >
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{idea.title}</Text>
            <Text style={getBadgeStyle(idea.badge)}>{idea.badge}</Text>
          </View>
          <Text style={styles.location}>📍 {idea.location}</Text>
          <View style={styles.tagRow}>
           {idea.tags.map((tag, idx) => (
  <Text key={`${tag}-${idx}`} style={styles.tag}>
                {tag}
              </Text>
            ))}
          </View>
          {idea.stars && <Text style={styles.stars}>{idea.stars}</Text>}
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.mainBtn}>
        <Text style={styles.mainBtnText}>Generate More Ideas ❤️</Text>
      </TouchableOpacity>

      {/* MODALS */}
      <IdeaModal
        visible={ideaModal}
        selectedIdea={selectedIdea}
        onPass={handlePass}
        onAccept={handleAccept}
      />

      <RatingModal
        visible={ratingModal}
        selectedIdea={selectedIdea}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        onDone={handleRatingDone}
      />
    </ScrollView>
  );
};

export default DateGenerator;

const PRIMARY = "#6F370F";
const LIGHT_BG = "#FBF7F2";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: PRIMARY,
    marginBottom: 10,
  },
  label: {
    marginTop: 16,
    marginBottom: 6,
    color: PRIMARY,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#B7835E",
    borderRadius: 20,
    padding: 12,
    backgroundColor: "#fff",
  },
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  chip: {
    borderWidth: 1,
    borderColor: "#B7835E",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  chipActive: {
    backgroundColor: "#A16438",
    borderColor: "#B7835E",
  },
  chipText: {
    color: PRIMARY,
  },
  chipTextActive: {
    color: "#fff",
  },
  timeBox: {
    borderWidth: 1,
    borderColor: "#B7835E",
    borderRadius: 20,
    padding: 14,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  timeText: {
    color: PRIMARY,
    fontWeight: "600",
  },
  mainBtn: {
    backgroundColor: PRIMARY,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  mainBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
  },
  card: {
    borderWidth: 1,
    borderColor: "#B7835E",
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    backgroundColor: "white",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontWeight: "600",
    color: PRIMARY,
    flex: 1,
    marginRight: 8,
  },
  location: {
    marginVertical: 4,
    color: "#7a7a7a",
  },
  tagRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 6,
  },
  tag: {
    backgroundColor: "#F1E4D8",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    color: PRIMARY,
    fontSize: 12,
  },
  badgeRed: {
    backgroundColor: "#F8D7DA",
    color: "#B02A37",
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  badgeGreen: {
    backgroundColor: "#D1E7DD",
    color: "#146C43",
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  badgeDone: {
    backgroundColor: "#CFE2FF",
    color: "#084298",
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  stars: {
    marginTop: 6,
    color: "#FFA500",
  },
});