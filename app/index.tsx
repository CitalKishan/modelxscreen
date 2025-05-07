import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  console.log("----->     Index");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          console.log("----->     Go to Screen 1 pressed");
          router.push("./screens/screen1");
        }}
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
        }}
      >
        <Text>Go to Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("----->     Go to Screen 2 pressed");
          router.push("./screens/screen2");
        }}
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Text>Go to Screen 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("----->     Go to Screen 3 pressed");
          router.push("./screens/screen3");
        }}
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
        }}
      >
        <Text>Go to Screen 3</Text>
      </TouchableOpacity>
    </View>
  );
}
