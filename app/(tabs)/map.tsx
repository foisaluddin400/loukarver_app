


import MapPage from "@/components/map/MapPage";
import MainNavbar from "@/components/shared/MainNavbar";
import { View, StyleSheet, ScrollView } from "react-native";

export default function Map() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
 <MainNavbar />
      <MapPage></MapPage>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF7F2",
   
  },

});