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
        name="modal"
        options={{
          headerShown: false,
          title: "Modal",
          tabBarIcon: () => null,
          tabBarIconStyle: { height: 0 },
        }}
      />
      <Tabs.Screen
        name="screens/screen1"
        options={{
          headerShown: false,
          title: "Screen 1",
          tabBarIcon: () => null,
          tabBarIconStyle: { height: 0 },
          href: null,
        }}
      />
      <Tabs.Screen
        name="screens/screen2"
        options={{
          headerShown: false,
          title: "Screen 2",
          tabBarIcon: () => null,
          tabBarIconStyle: { height: 0 },
          href: null,
        }}
      />
      <Tabs.Screen
        name="screens/screen3"
        options={{
          headerShown: false,
          title: "Screen 3",
          tabBarIcon: () => null,
          tabBarIconStyle: { height: 0 },
          href: null,
        }}
      />
    </Tabs>
  );
}
