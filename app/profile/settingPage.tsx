import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import LockIco from "@/components/image/LockIco";
import SubscriptionIco from "@/components/image/SubscriptionIco";
import LanguageIco from "@/components/image/LanguageIco";
import PrivacyIco from "@/components/image/PrivacyIco";
import TermsIco from "@/components/image/TermsIco";

const SettingPage = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#8B4513" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>EDIT PROFILE</Text>
      </View>

      <ScrollView
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Change Password */}
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => router.push("/profile/changePassword")}
        >
          <View style={styles.iconContainer}>
            <LockIco></LockIco>
          </View>
          <Text style={styles.itemText}>CHANGE PASSWORD</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Subscription */}
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => router.push("/profile/subscription")}
        >
          <View style={styles.iconContainer}>
            <SubscriptionIco></SubscriptionIco>
          </View>
          <Text style={styles.itemText}>SUBSCRIPTION</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Language */}
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => router.push("/profile/language")}
        >
          <View style={styles.iconContainer}>
            <LanguageIco></LanguageIco>
          </View>
          <Text style={styles.itemText}>LANGUAGE</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Privacy Policy */}
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => router.push("/profile/privacy")}
        >
          <View style={styles.iconContainer}>
            <PrivacyIco></PrivacyIco>
          </View>
          <Text style={styles.itemText}>PRIVACY POLICY</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Terms & Conditions */}
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => router.push("/profile/termsAndCondition")}
        >
          <View style={styles.iconContainer}>
            <TermsIco></TermsIco>
          </View>
          <Text style={styles.itemText}>TERMS & CONDITIONS</Text>
          <Text style={styles.arrow}>›</Text>
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
  backButton: {},
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
    letterSpacing: 1,
  },
  listContainer: {
    flex: 1,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 10,

    borderRadius: 16,
    marginBottom: 12,
  },
  iconContainer: {
    width: 46,
    height: 46,
    backgroundColor: "#C09B7A",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  icon: {
    fontSize: 22,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    color: "#6F370F",
  },
  arrow: {
    fontSize: 24,
    color: "#C9A47E",
    fontWeight: "500",
  },
});

export default SettingPage;
