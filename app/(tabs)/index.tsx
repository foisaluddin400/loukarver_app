import EmotionalRecent from "@/components/home/EmotionalRecent";
import Lavel from "@/components/home/Lavel";
import MainNavbar from "@/components/shared/MainNavbar";
import { View, StyleSheet, ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <MainNavbar />
      <View style={styles.container1}>
        <Lavel />
        <EmotionalRecent />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FBF7F2",
  },
  container1: {
    padding: 12,
  },
});
