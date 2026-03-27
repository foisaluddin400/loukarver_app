import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Subscription = () => {
  const PRIMARY = "#6F370F";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#8B4513" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>SUBSCRIPTION</Text>
        </View>

        <Text style={styles.pageTitle}>Current Plan</Text>

        {/* Free Plan (Current) */}
        <View style={styles.planCard}>
          <View style={styles.currentPlanHeader}>
            <Text style={styles.currentPlanText}>Free</Text>
          </View>

          <View style={styles.planContent}>
            <Text style={styles.planName}>4 Day Trail</Text>
            <Text style={styles.price}>$0.00</Text>
            <Text style={styles.perMonth}>Per month</Text>

            <View style={styles.features}>
              <View style={styles.featureRow}>
                <Text style={styles.check}>✓</Text>
                <Text style={styles.featureText}>Limited access</Text>
              </View>
              <View style={styles.featureRow}>
                <Text style={styles.check}>✓</Text>
                <Text style={styles.featureText}>Basic appreciation</Text>
              </View>
              <View style={styles.featureRow}>
                <Text style={styles.check}>✓</Text>
                <Text style={styles.featureText}>
                  Unlimited date generation
                </Text>
              </View>
              <View style={styles.featureRow}>
                <Text style={styles.check}>✓</Text>
                <Text style={styles.featureText}>Full memory storage</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.currentButton} disabled>
              <Text style={styles.currentButtonText}>Current Plan</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Individual Plan */}
        <View style={styles.planCard}>
          <View style={styles.planContent}>
            <Text style={styles.planName}>Individual Plan</Text>
            <Text style={styles.price}>$10.00</Text>
            <Text style={styles.perMonth}>Per month</Text>

            <View style={styles.features}>
              <View style={styles.featureRow}>
                <Text style={styles.check}>✓</Text>
                <Text style={styles.featureText}>Limited access</Text>
              </View>
              <View style={styles.featureRow}>
                <Text style={styles.check}>✓</Text>
                <Text style={styles.featureText}>Basic appreciation</Text>
              </View>
              <View style={styles.featureRow}>
                <Text style={styles.check}>✓</Text>
                <Text style={styles.featureText}>
                  Unlimited date generation
                </Text>
              </View>
              <View style={styles.featureRow}>
                <Text style={styles.check}>✓</Text>
                <Text style={styles.featureText}>Full memory storage</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.upgradeButton}>
              <Text style={styles.upgradeButtonText}>Upgrade</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Couple Plan */}
        <View style={styles.planCard}>
          <View style={styles.planContent}>
            <Text style={styles.planName}>Couple Plan</Text>
            <Text style={styles.coupleSubtitle}>Pay for Your Partner</Text>
            <Text style={styles.price}>$20.00</Text>
            <Text style={styles.perMonth}>Per month</Text>

            <View style={styles.features}>
              <View style={styles.featureRow}>
                <Text style={styles.check}>✓</Text>
                <Text style={styles.featureText}>Limited access</Text>
              </View>
              <View style={styles.featureRow}>
                <Text style={styles.check}>✓</Text>
                <Text style={styles.featureText}>Basic appreciation</Text>
              </View>
              <View style={styles.featureRow}>
                <Text style={styles.check}>✓</Text>
                <Text style={styles.featureText}>
                  Unlimited date generation
                </Text>
              </View>
              <View style={styles.featureRow}>
                <Text style={styles.check}>✓</Text>
                <Text style={styles.featureText}>Full memory storage</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.upgradeButton}>
              <Text style={styles.upgradeButtonText}>Upgrade</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF7F2",
    padding: 12,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#6F370F",
    marginBottom: 20,
  },
  planCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#6F370F",
    elevation: 4,
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
    fontWeight: "500",
    color: "#6F370F",
    letterSpacing: 0.5,
  },
  currentPlanHeader: {
    backgroundColor: "#B7835E",
    paddingVertical: 10,
    alignItems: "center",
  },
  currentPlanText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  planContent: {
    padding: 20,
  },
  planName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#6F370F",
    marginBottom: 4,
  },
  coupleSubtitle: {
    fontSize: 14,
    color: "#8B5A2B",
    marginBottom: 8,
  },
  price: {
    fontSize: 32,
    fontWeight: "500",
    color: "#6F370F",
    marginBottom: 2,
  },
  perMonth: {
    fontSize: 14,
    color: "#999",
    marginBottom: 20,
  },
  features: {
    marginBottom: 24,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  check: {
    color: "#4CAF50",
    fontSize: 18,
    marginRight: 10,
    fontWeight: "bold",
  },
  featureText: {
    fontSize: 15,
    color: "#444",
  },
  currentButton: {
    backgroundColor: "#E8D9C8",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  currentButtonText: {
    color: "#6F370F",
    fontSize: 15,
    fontWeight: "500",
  },
  upgradeButton: {
    backgroundColor: "#6F370F",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  upgradeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Subscription;
