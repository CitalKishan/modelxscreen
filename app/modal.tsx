import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal1 from "../modals/modal1";
import Modal2 from "../modals/modal2";
import Modal3 from "../modals/modal3";
const Modal = () => {
  console.log("Rendering Modal Screen");
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
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
        onPress={() => setModal1Visible(true)}
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
        onPress={() => setModal2Visible(true)}
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
        onPress={() => setModal3Visible(true)}
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

      <Modal1 visible={modal1Visible} onClose={() => setModal1Visible(false)} />
      <Modal2 visible={modal2Visible} onClose={() => setModal2Visible(false)} />
      <Modal3 visible={modal3Visible} onClose={() => setModal3Visible(false)} />
    </View>
  );
};

export default Modal;
