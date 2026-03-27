import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const PRIMARY = '#6F370F';

  return (

      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Header */}
       <View style={styles.header}>
        <TouchableOpacity>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#8B4513" />
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>CHANGE PASSWORD</Text>
      </View>

        {/* Form */}
        <View style={styles.formContainer}>
          
          {/* Current Password */}
          <Text style={styles.label}>Current Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter current password"
            value={currentPassword}
            onChangeText={setCurrentPassword}
            secureTextEntry
            placeholderTextColor="#999"
          />

          {/* New Password */}
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
            placeholderTextColor="#999"
          />

          {/* Retype New Password */}
          <Text style={styles.label}>Retype New Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Retype new password"
            value={retypePassword}
            onChangeText={setRetypePassword}
            secureTextEntry
            placeholderTextColor="#999"
          />

          {/* Update Button */}
          <TouchableOpacity style={[styles.updateButton, { backgroundColor: PRIMARY }]}>
            <Text style={styles.updateButtonText}>Update Password</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF7F2',
    padding:12
  },
  scrollContent: {
    flexGrow: 1,
   
   
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
  updateButton: {
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 40,
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '500',
  },
});

export default ChangePassword;