import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { COLORS, FONTS, ICONS, SHADOW, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
    bottom: 10,
    left: 0,
    padding: SIZES.medium * 2,
    paddingBottom: SIZES.medium * 5,
    position: "absolute",
    right: 0,
    ...SHADOW.darkShadow
  },
  flex: { flex: 1 },
  heading: { ...FONTS.h4 },
  content: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.font * 2
  },
  firstMethodWrapper: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  methodImage: {
    alignItems: "center",
    backgroundColor: COLORS.lightpurple,
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    width: 40
  },
  image: { height: 25, width: 25 },
  barcodeText: { marginLeft: SIZES.padding, ...FONTS.body4 },
  secondMethodWrapper: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

const ScanPaymentMethods = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.heading}>Another</Text>
        <Text style={styles.heading}>Payment Method</Text>
      </View>

      <View style={styles.content}>
        <Pressable style={styles.firstMethodWrapper}>
          <View
            style={[
              styles.methodImage,
              { backgroundColor: COLORS.lightpurple }
            ]}
          >
            <Image
              source={ICONS.phone}
              resizeMode="cover"
              style={[
                styles.image,
                {
                  tintColor: COLORS.purple
                }
              ]}
            />
          </View>
          <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>
            Phone Number
          </Text>
        </Pressable>

        <Pressable
          style={styles.secondMethodWrapper}
          onPress={() => console.log("Barcode")}
        >
          <View
            style={[styles.methodImage, { backgroundColor: COLORS.lightGreen }]}
          >
            <Image
              source={ICONS.barcode}
              resizeMode="cover"
              style={[
                styles.image,
                {
                  tintColor: COLORS.primary
                }
              ]}
            />
          </View>
          <Text style={styles.barcodeText}>Barcode</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ScanPaymentMethods;
