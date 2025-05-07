import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const Screen1 = () => {
  console.log("----->     Screen1");
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
      <Text>I am Screen 1</Text>
    </View>
  );
};

export default Screen1;
