import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            position: "absolute",
            bottom: 30,
            backgroundColor: "#000",
            height: 60,
            borderRadius: 30,
            marginHorizontal: 20, // 👈 adds left/right spacing!
            paddingHorizontal: 10,
            paddingTop: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5,
          },          
          
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#888",
        tabBarIcon: ({ color, size }) => {
            const icons: Record<string, React.ComponentProps<typeof FontAwesome>["name"]> = {
              home: "home",
              swipe: "heart",
              messages: "comment",
              profile: "user",
            };
      
            return (
              <FontAwesome
                name={icons[route.name] || "circle"} // fallback if name is unknown
                size={24}
                color={color}
              />
            );
          },
      })}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="swipe" />
      <Tabs.Screen name="messages" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
