import { SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

import { useStateContext } from "../context/state-context";
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from "../constants";
import {
  FocusedStatusBar,
  HomeFeatures,
  HomeSpecialOffers,
  SuccessModal
} from "../components";

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.white, flex: 1 },
  scrollWrapper: {
    flex: 1,
    paddingBottom: SIZES.medium * 5,
    paddingHorizontal: SIZES.medium
  },
  headingWrapper: { flexDirection: "row", marginVertical: SIZES.font },
  flex: { flex: 1 },
  headingText1: { ...FONTS.h3, fontFamily: "ExtraBold" },
  headingText2: { ...FONTS.body4, color: COLORS.gray },
  content: { alignItems: "center", justifyContent: "center" },
  bellWrapper: {
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    width: 40
  },
  bell: {
    height: 20,
    tintColor: COLORS.secondary,
    width: 20
  },
  bar: {
    backgroundColor: COLORS.red,
    borderRadius: 5,
    height: 10,
    position: "absolute",
    right: -5,
    top: -5,
    width: 10
  },
  bannerWrapper: {
    borderRadius: SIZES.medium,
    height: 150,
    marginVertical: SIZES.padding * 2
  },
  banner: {
    borderRadius: SIZES.medium,
    height: "100%",
    width: "100%"
  }
});

export const HomeScreen = ({ navigation }) => {
  const { statusModal, setStatusModal } = useStateContext();

  const handleClose = () => setStatusModal(false);
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      {statusModal && <SuccessModal handleClose={handleClose} />}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollWrapper}>
          <View style={styles.headingWrapper}>
            <View style={styles.flex}>
              <Text style={styles.headingText1}>Hello!</Text>
              <Text style={styles.headingText2}>Sherlock Holmes</Text>
            </View>

            <View style={styles.content}>
              <Pressable style={styles.bellWrapper}>
                <Image
                  source={ICONS.bell}
                  style={styles.bell}
                  resizeMode="cover"
                />
                <View style={styles.bar} />
              </Pressable>
            </View>
          </View>

          <View style={styles.bannerWrapper}>
            <Image
              source={IMAGES.premiumbanner}
              resizeMode="cover"
              style={styles.banner}
            />
          </View>

          <HomeFeatures navigation={navigation} />
          <HomeSpecialOffers />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
