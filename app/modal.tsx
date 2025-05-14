import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal1 from "../modals/modal1";
import Modal2 from "../modals/modal2";
import Modal3 from "../modals/modal3";
const Modal = () => {
  console.log("Rendering Modal Screen");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          backgroundColor: "#2196F3",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          elevation: 3,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Text
          style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
        >
          Open Modal 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          backgroundColor: "#2196F3",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          elevation: 3,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Text
          style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
        >
          Open Modal 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          backgroundColor: "#2196F3",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          elevation: 3,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Text
          style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
        >
          Open Modal 3
        </Text>
      </TouchableOpacity>

      <Modal1 visible={modalVisible} onClose={() => setModalVisible(false)} />
      <Modal2 visible={modalVisible} onClose={() => setModalVisible(false)} />
      <Modal3 visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

export default Modal;
