import { Image, Pressable, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";

import { useStateContext } from "../context/state-context";
import { COLORS, ICONS, SHADOW, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    bottom: 0,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1
  },
  animated: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    padding: SIZES.medium,
    width: "80%",
    ...SHADOW.mediumShadow
  },
  modalView: {
    alignItems: "flex-end",
    marginBottom: SIZES.font
  },
  close: { height: 15, tintColor: COLORS.gray, width: 15 }
});

const CustomModal = ({ handleClose, children }) => {
  const { animationType, setAnimationType } = useStateContext();

  return (
    <View style={styles.container}>
      <Animatable.View
        animation={animationType}
        duration={500}
        delay={50}
        style={styles.animated}
      >
        <Pressable
          style={styles.modalView}
          onPress={() => {
            setAnimationType("zoomOut");
            setTimeout(() => {
              handleClose();
            }, 800);
          }}
        >
          <Image source={ICONS.close} style={styles.close} resizeMode="cover" />
        </Pressable>
        {children}
      </Animatable.View>
    </View>
  );
};

export default CustomModal;
