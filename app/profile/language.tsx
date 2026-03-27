import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    "English",
    "Portuguese",
    "Italian",
    "Spanish",
    "Mandarin",
    "Japanese",
  ];

  const PRIMARY = "#B7835E";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="#8B4513" />
            </TouchableOpacity>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>LANGUAGE</Text>
        </View>

        {/* Language List */}
        <View style={styles.languageList}>
          {languages.map((language) => {
            const isSelected = selectedLanguage === language;

            return (
              <TouchableOpacity
                key={language}
                style={[styles.languageItem, isSelected && styles.selectedItem]}
                onPress={() => setSelectedLanguage(language)}
              >
                <Text
                  style={[
                    styles.languageText,
                    isSelected && styles.selectedText,
                  ]}
                >
                  {language}
                </Text>

                {isSelected && (
                  <View style={styles.checkContainer}>
                    <Text style={styles.checkmark}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF7F2",
    padding:12
  },
  scrollContent: {
    flexGrow: 1,
  
  
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",

    marginVertical: 10,
    paddingBottom: 20,
  },

  backIcon: {
    fontSize: 28,
    color: "#6F370F",
    fontWeight: "bold",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#6F370F",
    letterSpacing: 0.5,
  },
  languageList: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 8,
   borderWidth:1,
   borderColor:'#6F370F',
    elevation: 3,
  },
  languageItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  selectedItem: {
    backgroundColor: "#F8EDE4",
  },
  languageText: {
    fontSize: 17,
    color: "#444444",
    fontWeight: "500",
  },
  selectedText: {
    color: "#6F370F",
    fontWeight: "500",
  },
  checkContainer: {
    width: 26,
    height: 26,
    backgroundColor: "#B7835E",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#6F370F",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 40,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "500",
  },
});

export default Language;
