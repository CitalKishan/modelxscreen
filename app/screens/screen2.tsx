import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const Screen2 = () => {
  console.log("----->     Screen2");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => router.replace("/")}
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
        }}
      >
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>I am Screen 2</Text>
    </View>
  );
};

export default Screen2;
