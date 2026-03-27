import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FBF7F2" }}>
        
        {/* Status Bar */}
        <StatusBar style="dark" />

        {/* Navigation Stack */}
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splash" />
          <Stack.Screen name="(tabs)" />
        </Stack>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}