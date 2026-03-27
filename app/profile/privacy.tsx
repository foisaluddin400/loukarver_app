import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,

  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Privacy = () => {
  const PRIMARY = '#B7835E';

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
       <View style={styles.header}>
        <TouchableOpacity>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#8B4513" />
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PRIVACY POLICY</Text>
      </View>

      <ScrollView 
        style={styles.scrollView} 
  
             showsVerticalScrollIndicator={false}
      >
        <Text style={styles.lastUpdated}>Last updated: March 27, 2026</Text>

        <Text style={styles.intro}>
          We value your trust and are committed to protecting your personal information. 
          This Privacy Policy explains how we collect, use, and safeguard your data when you use our app.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Information We Collect</Text>
          <Text style={styles.sectionText}>
            We may collect the following types of information:
          </Text>
          <Text style={styles.bullet}>• Personal information (name, email address)</Text>
          <Text style={styles.bullet}>• Account credentials and preferences</Text>
          <Text style={styles.bullet}>• Usage data and app interactions</Text>
          <Text style={styles.bullet}>• Memories, dates, and reflections you create</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
          <Text style={styles.sectionText}>
            Your information helps us provide, improve, and personalize our services, including:
          </Text>
          <Text style={styles.bullet}>• Managing your account and subscriptions</Text>
          <Text style={styles.bullet}>• Generating meaningful date ideas and memories</Text>
          <Text style={styles.bullet}>• Enhancing your overall experience</Text>
          <Text style={styles.bullet}>• Sending important updates and notifications</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Data Sharing</Text>
          <Text style={styles.sectionText}>
            We do not sell your personal data. We may share information only in the following cases:
          </Text>
          <Text style={styles.bullet}>• With your explicit consent</Text>
          <Text style={styles.bullet}>• To comply with legal obligations</Text>
          <Text style={styles.bullet}>• To protect the security of our services</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Data Security</Text>
          <Text style={styles.sectionText}>
            We implement appropriate technical and organizational measures to protect your personal information 
            from unauthorized access, alteration, or disclosure.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Your Rights</Text>
          <Text style={styles.sectionText}>
            You have the right to access, update, or delete your personal information at any time. 
            You can also request a copy of the data we hold about you.
          </Text>
        </View>

        <Text style={styles.contact}>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <Text style={{ color: PRIMARY, fontWeight: '600' }}>
            support@yourapp.com
          </Text>
        </Text>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    padding:12
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
  backButton: {
    padding: 8,
  },


  scrollView: {
    flex: 1,
  },

  lastUpdated: {
    fontSize: 14,
    color: '#8B5A2B',
    marginBottom: 20,
    textAlign: 'center',
  },
  intro: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    marginBottom: 28,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6F370F',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 15.5,
    lineHeight: 24,
    color: '#555',
    marginBottom: 12,
  },
  bullet: {
    fontSize: 15.5,
    lineHeight: 26,
    color: '#555',
    paddingLeft: 8,
  },
  contact: {
    fontSize: 15.5,
    lineHeight: 24,
    color: '#555',
    marginTop: 20,
    marginBottom: 50,
  },
  bottomSpace: {
    height: 40,
  },
});

export default Privacy;