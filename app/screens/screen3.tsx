import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const Screen3 = () => {
  console.log("----->     Screen3");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => {
          router.replace("/");
          console.log("----->     Back button pressed in Screen 3");
        }}
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
        }}
      >
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>I am Screen 3</Text>
    </View>
  );
};

export default Screen3;
