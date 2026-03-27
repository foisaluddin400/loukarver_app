import Avature from "@/components/image/Avature";
import CameraIco from "@/components/image/CameraIco";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const EditProfile = () => {
  const [name, setName] = useState("lou");
  const [email, setEmail] = useState("lou123@gmail.com");
  const [reflection, setReflection] = useState(
    "What I love most about us is how we can turn the simplest walk in the park into an adventure of deep conversation and laughter...",
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#8B4513" />
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>EDIT PROFILE</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.profileContainer}>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatar}>
            <Avature></Avature>
          </View>
          <TouchableOpacity style={styles.cameraButton}>
            <CameraIco></CameraIco>
          </TouchableOpacity>
        </View>
      </View>

      {/* Form Fields */}
      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Enter your name"
        />

        {/* Email Address */}
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* My Reflection */}
        <Text style={styles.label}>My Reflection</Text>
        <TextInput
          value={reflection}
          onChangeText={setReflection}
          style={[styles.input, styles.reflectionInput]}
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF7F2",
    padding: 12,
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
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E8D9C8",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#FFF",
  },
  avatarIcon: {
    fontSize: 45,
    color: "#8B5A2B",
  },
  cameraButton: {
    position: "absolute",
    bottom: 2,
    right: 4,
    backgroundColor: "#C09B7A",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FFF",
  },
  cameraIcon: {
    fontSize: 14,
    color: "#FFF",
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    color: "#6F370F",
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#B7835E",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#333",
  },
  reflectionInput: {
    height: 140,
    paddingTop: 14,
    lineHeight: 24,
  },
  saveButton: {
    backgroundColor: "#6F370F",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "500",
  },
});

export default EditProfile;
