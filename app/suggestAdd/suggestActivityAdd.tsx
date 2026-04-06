import DateTimeIco from '@/components/image/DateTimeIco';
import SentIco from '@/components/image/SentIco';
import SettingIco from '@/components/image/SettingIco';
import SuggestIco from '@/components/image/SuggestIco';
import TimeIco from '@/components/image/TimeIco';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#6F370F';
const BORDER = '#B7835E';
const LIGHT_BG = '#FBF7F2';
const TEXT_MUTED = '#6F370F';
const CARD_BG = '#FCFAF8';
const ICON_BG = '#FFF7F2';

const SuggestActivityAdd = () => {
  const [selectedCategory, setSelectedCategory] = useState<'Bonding' | 'Fun' | 'Romantic'>('Bonding');
  const [idea, setIdea] = useState('');
  const [addDateTime, setAddDateTime] = useState(true);
  const [setReminder, setSetReminder] = useState(false);

  const categories = [
    { label: 'Bonding', icon: '💕' },
    { label: 'Fun', icon: '🎉' },
    { label: 'Romantic', icon: '💍' },
  ] as const;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#8B4513" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Suggest Activity</Text>
      </View>
        {/* Heading */}
        <Text style={styles.sectionLabel}>CHOOSE A CATEGORY</Text>

        {/* Category Buttons */}
        <View style={styles.categoryRow}>
          {categories.map((item) => {
            const active = selectedCategory === item.label;
            return (
              <TouchableOpacity
                key={item.label}
                activeOpacity={0.85}
                style={[styles.categoryBtn, active && styles.categoryBtnActive]}
                onPress={() => setSelectedCategory(item.label)}
              >
                <Text style={[styles.categoryIcon, active && styles.categoryIconActive]}>
                  {item.icon}
                </Text>
                <Text style={[styles.categoryText, active && styles.categoryTextActive]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Main Card */}
        <View style={styles.heroCard}>
          <View style={styles.heartCircle}>
            <Text style={styles.heartIcon}>♡</Text>
          </View>

          <Text style={styles.heroTitle}>Start Something New</Text>
          <Text style={styles.heroSubtitle}>
            Pick a category above to see curated suggestions{'\n'}
            or write your own idea to surprise your partner
          </Text>
        </View>

        {/* Suggest own idea */}
        <View style={styles.subSectionWrap}>
          <Text><SuggestIco></SuggestIco></Text><Text style={styles.subSectionTitle}> SUGGEST YOUR OWN IDEA</Text>
        </View>

        <TextInput
          style={styles.textArea}
          placeholder="Write your own activity idea..."
          placeholderTextColor="#C8B5A7"
          multiline
          value={idea}
          onChangeText={setIdea}
          textAlignVertical="top"
        />

        {/* Logistic */}
        <View style={styles.subSectionWrap}>
          <Text><SettingIco></SettingIco></Text><Text style={styles.subSectionTitle}> LOGISTIC</Text>
        </View>

        <View style={styles.logisticCard}>
          {/* Row 1 */}
          <View style={styles.logisticRow}>
            <View style={styles.rowLeft}>
              <View style={styles.smallIconCircle}>
                <Text style={styles.smallIcon}><DateTimeIco></DateTimeIco></Text>
              </View>
              <View>
                <Text style={styles.rowTitle}>Add Date & Time</Text>
                <Text style={styles.rowSubtitle}>Pick a specific moment</Text>
              </View>
            </View>

            <Switch
              value={addDateTime}
              onValueChange={setAddDateTime}
              trackColor={{ false: '#D9D9D9', true: '#C8966B' }}
              thumbColor={addDateTime ? PRIMARY : '#FFFFFF'}
              ios_backgroundColor="#D9D9D9"
            />
          </View>

          <View style={styles.divider} />

          {/* Row 2 */}
          <View style={styles.logisticRow}>
            <View style={styles.rowLeft}>
              <View style={styles.smallIconCircle}>
                <Text style={styles.smallIcon}><TimeIco></TimeIco></Text>
              </View>
              <View>
                <Text style={styles.rowTitle}>Set Reminder</Text>
                <Text style={styles.rowSubtitle}>Get notified before it starts</Text>
              </View>
            </View>

            <Switch
              value={setReminder}
              onValueChange={setSetReminder}
              trackColor={{ false: '#D9D9D9', true: '#C8966B' }}
              thumbColor={setReminder ? PRIMARY : '#FFFFFF'}
              ios_backgroundColor="#D9D9D9"
            />
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity activeOpacity={0.85} style={styles.sendBtn}>
          <Text style={styles.sendBtnText}>Send To Partner </Text><Text style={{marginTop:7}}><SentIco></SentIco></Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SuggestActivityAdd;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: LIGHT_BG,
  },
  container: {
    flex: 1,
    backgroundColor: LIGHT_BG,
  },
  content: {
    paddingHorizontal: 12,
    paddingTop: 18,
    paddingBottom: 28,
  },

  sectionLabel: {
    fontWeight: "600",
    marginVertical: 10,
    color: "#6F370F",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,

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



  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  categoryBtn: {
    width: '30.8%',
    height: 46,
    borderRadius: 14,
    borderWidth: 1.2,
    borderColor: BORDER,
    backgroundColor: '#FFF8F3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryBtnActive: {
    backgroundColor: PRIMARY,
    borderColor: PRIMARY,
  },
  categoryIcon: {
    fontSize: 13,
    marginRight: 6,
  },
  categoryIconActive: {
    color: '#fff',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '500',
    color: PRIMARY,
  },
  categoryTextActive: {
    color: '#fff',
  },

  heroCard: {
    borderWidth: 1.3,
    borderColor: BORDER,
    borderRadius: 16,
    backgroundColor: CARD_BG,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 28,
    marginBottom: 20,
  },
  heartCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1.3,
    borderColor: BORDER,
    backgroundColor: ICON_BG,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  heartIcon: {
    fontSize: 18,
    color: '#C73E4B',
    fontWeight: '700',
  },
  heroTitle: {
    fontSize: 29,
    fontWeight: '500',
    color: PRIMARY,
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 13,
    color: PRIMARY,
    textAlign: 'center',
    lineHeight: 20,
    opacity: 0.85,
  },

  subSectionWrap: {
    marginBottom: 8,
    flexDirection:'row',
    gap:4,
   
  },
  subSectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: PRIMARY,
    letterSpacing: 0.2,
  },

  textArea: {
    minHeight: 104,
    borderWidth: 1.3,
    borderColor: BORDER,
    borderRadius: 14,
    backgroundColor: LIGHT_BG,
    paddingHorizontal: 14,
    paddingTop: 14,
    fontSize: 14,
    color: PRIMARY,
    marginBottom: 22,
  },

  logisticCard: {
    borderWidth: 1.3,
    borderColor: BORDER,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#FFF8F4',
    marginBottom: 20,
  },
  logisticRow: {
    minHeight: 74,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  smallIconCircle: {
   
  
  
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  smallIcon: {
    fontSize: 13,
  },
  rowTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: PRIMARY,
    marginBottom: 2,
  },
  rowSubtitle: {
    fontSize: 12,
    color: TEXT_MUTED,
  },
  divider: {
    height: 1,
    backgroundColor: BORDER,
    opacity: 0.5,
  },

  sendBtn: {
    height: 54,
    borderRadius: 16,
    flexDirection:'row',
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  sendBtnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});