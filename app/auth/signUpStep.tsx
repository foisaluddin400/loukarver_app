import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,

  ScrollView,
} from 'react-native';

type Step = 'name' | 'city' | 'official' | 'longDistance';

const SignUpStep = () => {
  const [step, setStep] = useState<Step>('name');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [isLongDistance, setIsLongDistance] = useState<boolean | null>(null);

  const PRIMARY = '#6F370F';

  const progress = {
    name: 1,
    city: 2,
    official: 3,
    longDistance: 4,
  };

  const handleContinue = () => {
    if (step === 'name' && name.trim()) setStep('city');
    else if (step === 'city' && city.trim()) setStep('official');
    else if (step === 'official') setStep('longDistance');
    else if (step === 'longDistance') {
      // Navigate to actual Sign Up page
      console.log('Go to Sign Up Page');
      router.push('/auth/signUp')  // Uncomment when using expo-router
    }
  };

  const renderProgress = () => {
    const current = progress[step];
    return (
      <View style={styles.progressContainer}>
        {[1, 2, 3, 4].map((i) => (
          <View
            key={i}
            style={[
              styles.progressBar,
              i <= current && styles.progressBarActive,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    
      <ScrollView contentContainerStyle={styles.container}>
        
        {renderProgress()}

        {/* Step 1: Name */}
        {step === 'name' && (
          <View style={styles.stepContainer}>
            <Text style={styles.question}>What's your name?</Text>
            <Text style={styles.label}>Your Name</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Lou"
              value={name}
              onChangeText={setName}
            />
          </View>
        )}

        {/* Step 2: City */}
        {step === 'city' && (
          <View style={styles.stepContainer}>
            <Text style={styles.question}>Which city are you in?</Text>
            <Text style={styles.label}>Your City</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Los Angeles"
              value={city}
              onChangeText={setCity}
            />
          </View>
        )}

        {/* Step 3: Official Date */}
        {step === 'official' && (
          <View style={styles.stepContainer}>
            <Text style={styles.question}>When did things become official?</Text>
            <Text style={styles.subtitle}>
              The day you chose each other. Even if it was unspoken - pick the date that feels right.
            </Text>
            <Text style={styles.label}>Our Start Date</Text>
            <TextInput
              style={styles.input}
              placeholder="mm/dd/yyyy"
              value={startDate}
              onChangeText={setStartDate}
            />
          </View>
        )}

        {/* Step 4: Long Distance */}
        {step === 'longDistance' && (
          <View style={styles.stepContainer}>
            <Text style={styles.question}>Long distance?</Text>
            <Text style={styles.subtitle}>Are you and your partner in different cities?</Text>

            <View style={styles.optionsContainer}>
              <TouchableOpacity
                style={[
                  styles.optionButton,
                  isLongDistance === true && styles.optionSelected,
                ]}
                onPress={() => setIsLongDistance(true)}
              >
                <Text style={[
                  styles.optionText,
                  isLongDistance === true && styles.optionTextSelected,
                ]}>
                  Yes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.optionButton,
                  isLongDistance === false && styles.optionSelected,
                ]}
                onPress={() => setIsLongDistance(false)}
              >
                <Text style={[
                  styles.optionText,
                  isLongDistance === false && styles.optionTextSelected,
                ]}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Continue Button */}
        <TouchableOpacity
          style={[styles.continueButton, { backgroundColor: PRIMARY }]}
          onPress={handleContinue}
          disabled={
            (step === 'name' && !name.trim()) ||
            (step === 'city' && !city.trim())
          }
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

      </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF7F2',
    padding:12,
      paddingTop: 60,
 paddingBottom: 40,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 12,
    paddingTop: 60,
    paddingBottom: 40,
  },
  progressContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 50,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#D9D6D6',
    borderRadius: 2,
  },
  progressBarActive: {
    backgroundColor: '#A16438',
  },
  stepContainer: {
    flex: 1,
  },
  question: {
    fontSize: 28,
    fontWeight: '700',
    color: '#6F370F',
    marginBottom: 30,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 30,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#6F370F',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B7835E',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 17,
    marginBottom: 40,
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  optionButton: {
    flex: 1,
    paddingVertical: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E8D9C8',
    borderRadius: 20,
    alignItems: 'center',
  },
  optionSelected: {
    borderColor: '#B7835E',
    backgroundColor: '#FFF8F0',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
  },
  optionTextSelected: {
    color: '#B7835E',
  },
  continueButton: {
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 'auto',
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});

export default SignUpStep;