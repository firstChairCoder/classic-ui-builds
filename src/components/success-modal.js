import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { useStateContext } from "../context/state-context";
import CustomModal from "./custom-modal";
import { COLORS, FONTS, ICONS, SIZES } from "../constants";

const styles = StyleSheet.create({
  checkWrapper: { marginVertical: SIZES.base },
  detailText: { ...FONTS.body4, color: COLORS.darkgray2 },
  flexRow: { flexDirection: "row" },
  body: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.base
  },
  ctaText: {
    ...FONTS.h3,
    color: COLORS.black
  },
  bottomWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: SIZES.base
  }
});

const SuccessModal = ({ handleClose }) => {
  const { modalText } = useStateContext();

  return (
    <CustomModal handleClose={handleClose}>
      <View style={styles.checkWrapper}>
        <Image
          source={ICONS.checkmark}
          style={{ width: "100%", height: 50 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.ctaText}>{modalText}</Text>

        <View style={styles.bottomWrapper}>
          <Text style={styles.detailText}>If you want to see the detail,</Text>
          <View style={styles.flexRow}>
            <Text style={styles.detailText}>please check on</Text>
            <Pressable>
              <Text style={styles.detailText}>Transaction Detail</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </CustomModal>
  );
};

export default SuccessModal;
