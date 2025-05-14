import { Modal, Text, TouchableOpacity, View } from "react-native";

interface Modal3Props {
  visible: boolean;
  onClose: () => void;
}

const Modal3 = ({ visible, onClose }: Modal3Props) => {
  console.log("Rendering Modal3");
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent={true}
      animationType="fade"
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
            width: "80%",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <TouchableOpacity
            onPress={onClose}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#eee",
              borderRadius: 15,
              height: 30,
              width: 30,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>X</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 20 }}>I am Modal 3</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Modal3;
