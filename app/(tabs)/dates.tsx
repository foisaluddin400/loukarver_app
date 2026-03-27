
import DateGenerator from "@/components/date/DateGenerator";
import MainNavbar from "@/components/shared/MainNavbar";
import { View, StyleSheet, ScrollView } from "react-native";

export default function Dates() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
 <MainNavbar />
      <DateGenerator></DateGenerator>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#FBF7F2",
  },

});