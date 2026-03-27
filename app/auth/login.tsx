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
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const PRIMARY = '#6F370F';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Welcome Text */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>
        </View>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          
          {/* Email Address */}
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
          />

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#999"
          />

          {/* Remember Me & Forgot Password */}
          <View style={styles.optionsRow}>
            <TouchableOpacity 
              style={styles.rememberContainer}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={[styles.checkbox, rememberMe && { backgroundColor: PRIMARY, borderColor: PRIMARY }]}>
                {rememberMe && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.rememberText}>Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgotText}>Forget password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity onPress={() => router.push("/(tabs)")} style={[styles.loginButton, { backgroundColor: PRIMARY }]}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity >
              <Text style={[styles.signupLink, { color: PRIMARY }]}>Sign Up</Text>
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
    backgroundColor: '#FBF7F2',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#6F370F',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8B5A2B',
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#6F370F',
    marginBottom: 8,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B7835E',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 16,
    color: '#333',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 30,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#B7835E',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  rememberText: {
    fontSize: 15,
    color: '#666',
  },
  forgotText: {
    fontSize: 15,
    color: '#B7835E',
    fontWeight: '400',
  },
  loginButton: {
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '500',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  signupText: {
    color: '#666',
    fontSize: 15,
  },
  signupLink: {
    fontWeight: '400',
  },
});

export default Login;