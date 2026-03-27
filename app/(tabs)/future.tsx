

import FuturePage from "@/components/futures/FuturePage";
import MainNavbar from "@/components/shared/MainNavbar";
import { View, StyleSheet, ScrollView } from "react-native";

export default function Future() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
 <MainNavbar />
      <FuturePage></FuturePage>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#FBF7F2",
  },

});