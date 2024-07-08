import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: { alignItems: "center", flex: 1, justifyContent: "center" },
  listWrapper: {
    backgroundColor: COLORS.lightGreen,
    borderRadius: SIZES.radius,
    marginVertical: SIZES.font * 2,
    width: "90%"
  },
  list: {
    marginBottom: SIZES.font,
    padding: SIZES.font
  },
  modalItem: {
    flexDirection: "row",
    padding: SIZES.padding
  },
  modalItemImage: {
    height: 30,
    marginRight: 10,
    width: 30
  },
  modalItemLabel: { ...FONTS.body4 }
});

function AreaModalItem({ item, setSelectArea, setModalVisible }) {
  return (
    <Pressable
      style={styles.modalItem}
      onPress={() => {
        setSelectArea(item);
        setModalVisible(false);
      }}
    >
      <Image source={{ uri: item.flag }} style={styles.modalItemImage} />
      <Text style={styles.modalItemLabel}>{item.name}</Text>
    </Pressable>
  );
}

const AreaModal = ({ areas, modalVisible, setModalVisible, setSelectArea }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.container}>
          <View style={styles.listWrapper}>
            <FlatList
              data={areas}
              renderItem={({ item }) => (
                <AreaModalItem
                  item={item}
                  setSelectArea={setSelectArea}
                  setModalVisible={setModalVisible}
                />
              )}
              keyExtractor={(item) =>
                `${item.code + item.callingCode + item.name}`
              }
              showsVerticalScrollIndicator={false}
              style={styles.list}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AreaModal;
