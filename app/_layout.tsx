import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Screen",
          tabBarIcon: () => null,
          tabBarIconStyle: { height: 0 },
        }}
      />
      <Tabs.Screen
        name="model"
        options={{
          headerShown: false,
          title: "Model",
          tabBarIcon: () => null,
          tabBarIconStyle: { height: 0 },
        }}
      />
      <Tabs.Screen
        name="screens"
        options={{
          headerShown: false,
          title: "Screens",
          tabBarIcon: () => null,
          tabBarIconStyle: { height: 0 },
          href: null,
        }}
      />
    </Tabs>
  );
}
