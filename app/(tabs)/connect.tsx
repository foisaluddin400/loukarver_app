import ConnectComponent from "@/components/connnect/ConnectComponent";
import MainNavbar from "@/components/shared/MainNavbar";
import { View, Text, StyleSheet } from "react-native";

export default function Connect() {
  return (
    <View style={styles.container}>
      <MainNavbar />
      <ConnectComponent></ConnectComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
