


import { View, StyleSheet, ScrollView } from "react-native";
import ProfilePage from "./profilePage";

export default function MainProfile() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <ProfilePage></ProfilePage>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#FBF7F2",
  },

});