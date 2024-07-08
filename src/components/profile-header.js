import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

import { COLORS, FONTS, ICONS, IMAGES, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: { marginVertical: SIZES.font },
  account: {
    ...FONTS.h3,
    color: COLORS.lime,
    marginBottom: SIZES.font
  },
  innerWrapper: { marginVertical: SIZES.padding * 2 },
  dotsWrapper: {
    elevation: 5,
    position: "absolute",
    right: 10,
    top: 10
  },
  dots: { height: 25, tintColor: COLORS.white, width: 25 },
  content: {
    alignItems: "center",
    borderRadius: SIZES.font,
    flexDirection: "row",
    height: 150,
    overflow: "hidden",
    padding: SIZES.font
  },
  bg: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0
  },
  avatarWrapper: { marginHorizontal: SIZES.base },
  avatar: {
    borderRadius: 10,
    height: 60,
    width: 60
  },
  phoneNum: {
    ...FONTS.body4,
    color: COLORS.white,
    fontFamily: "ExtraBold",
    marginTop: 3
  }
});

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.account}>Account</Text>

      <View style={styles.innerWrapper}>
        <View style={styles.content}>
          <ImageBackground
            source={IMAGES.banner}
            resizeMode="cover"
            style={styles.bg}
          />
          <View style={styles.avatarWrapper}>
            <Image
              source={IMAGES.holmes}
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>
          <>
            <Text style={styles.username}>Sherlock Holmes</Text>
            <Text style={styles.phoneNum}>+1 898 860 110</Text>
          </>
        </View>
        <Pressable style={styles.dotsWrapper}>
          <Image source={ICONS.dots} style={styles.dots} resizeMode="cover" />
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileHeader;
