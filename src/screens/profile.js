/* eslint-disable react/no-unstable-nested-components */
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

import { COLORS, FONTS, ICONS, SIZES } from "../constants";
import { FocusedStatusBar, ProfileHeader } from "../components";
import { profileOptions } from "../data";

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.white, flex: 1 },
  flex: { flex: 1 },
  padHorizontal: {
    paddingHorizontal: SIZES.medium
  },
  list: { paddingBottom: SIZES.medium * 6 },
  footerWrapper: {
    alignItems: "center",
    backgroundColor: COLORS.lightGreen,
    borderRadius: SIZES.font,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.medium,
    padding: SIZES.padding
  },
  innerFooterWrapper: {
    alignItems: "center",
    backgroundColor: COLORS.emerald,
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    width: 40
  },
  icon: {
    height: "50%",
    tintColor: COLORS.white,
    width: "50%"
  },
  signOutLabel: { ...FONTS.body4, color: COLORS.primary },
  optionWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
    padding: SIZES.padding
  },
  optionTitle: {
    ...FONTS.body4,
    color: COLORS.darkgray2,
    marginLeft: SIZES.base,
    textAlign: "center"
  },
  optionIconWrapper: {
    alignItems: "center",
    backgroundColor: COLORS.lightGreen,
    borderRadius: 25,
    height: 40,
    justifyContent: "center",
    width: 40
  },
  optionContent: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  forwardIcon: { height: 20, marginLeft: SIZES.base, width: 20 },
  optionDescriptionWrapper: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

const ProfileOptionItem = ({ item, index }) => (
  <Pressable
    style={[
      styles.optionWrapper,
      { marginTop: index === 3 ? SIZES.font * 2 : 3 }
    ]}
    onPress={() => true}
  >
    <View style={styles.optionContent}>
      <View style={styles.optionIconWrapper}>
        <Image
          source={item.icon}
          style={[styles.icon, { tintColor: COLORS.primary }]}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.optionTitle}>{item.title}</Text>
    </View>
    <View style={styles.optionDescriptionWrapper}>
      <Text
        style={[styles.optionTitle, { textAlign: "right", marginLeft: "auto" }]}
        numberOfLines={1}
      >
        {item.description ? item.description : ""}
      </Text>
      <Image
        source={ICONS.forward}
        style={styles.forwardIcon}
        resizeMode="cover"
      />
    </View>
  </Pressable>
);

export const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <View style={styles.flex}>
        <View style={styles.padHorizontal}>
          <FlatList
            data={profileOptions}
            renderItem={({ item, index }) => (
              <ProfileOptionItem
                item={item}
                index={index}
                navigation={navigation}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <ProfileHeader />}
            ListFooterComponent={() => (
              <Pressable style={styles.footerWrapper} activeOpacity={0.5}>
                <View style={styles.innerFooterWrapper}>
                  <Image
                    source={ICONS.signout}
                    style={styles.icon}
                    resizeMode="cover"
                  />
                </View>
                <Text style={styles.signOutLabel}>Sign Out</Text>
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
