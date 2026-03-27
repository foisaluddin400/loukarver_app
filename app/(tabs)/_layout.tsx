import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import HomeMenuIco from "@/components/image/HomeMenuIco";
import ConnectIco from "@/components/image/ConnectIco";
import DatesMenuIco from "@/components/image/DatesMenuIco";
import FutureMenuIco from "@/components/image/FutureMenuIco";
import MapMenuIco from "@/components/image/MapMenuIco";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#8B4513",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color}) => (
            <HomeMenuIco   color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="connect"
        options={{
          title: "Connect",
          tabBarIcon: ({ color}) => (
            <ConnectIco  color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="dates"
        options={{
          title: "Dates",
          tabBarIcon: ({ color }) => (
            <DatesMenuIco  color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="future"
        options={{
          title: "Future",
          tabBarIcon: ({ color}) => (
            <FutureMenuIco  color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color}) => (
            <MapMenuIco color={color} />
          ),
        }}
      />
    </Tabs>
  );
}