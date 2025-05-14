import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal1 from "../modals/modal1";
const Modal = () => {
  console.log("Rendering Modal Screen");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Open Modal 1</Text>
      </TouchableOpacity>
      <Modal1 visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

export default Modal;
