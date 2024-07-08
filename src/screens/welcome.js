/* eslint-disable @typescript-eslint/no-shadow */
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { FocusedStatusBar } from "../components";
import { COLORS, FONTS, SIZES } from "../constants";
import { welcomeCarouselData } from "../data";

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.white, flex: 1 },
  carouselWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    minHeight: 650,
    paddingVertical: SIZES.medium
  },
  signUpBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium * 1.5,
    color: COLORS.white,
    padding: SIZES.font,
    width: "90%"
  },
  dotStyle: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    height: 10,
    width: 10
  },
  signUpBtnLabel: {
    ...FONTS.body3,
    color: COLORS.white,
    textAlign: "center"
  },
  carouselItemWrapper: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: SIZES.medium
  },
  carouselItemImage: { height: 270, width: 270 },
  welcome: { ...FONTS.largeTitle, marginTop: SIZES.medium * 2 },
  carouseItemTitle: {
    ...FONTS.body3,
    color: COLORS.primary,
    padding: SIZES.medium,
    textAlign: "center"
  }
});

const WelcomeCarouselItem = ({ item }) => (
  <View style={styles.carouselItemWrapper}>
    <Image source={item.imgUrl} style={styles.carouselItemImage} />
    <Text style={styles.welcome}>Welcome</Text>
    <Text style={styles.carouseItemTitle}>{item.title}</Text>
  </View>
);

export const WelcomeScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.white} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.carouselWrapper}>
          <Carousel
            ref={isCarousel}
            data={welcomeCarouselData}
            renderItem={({ item }) => <WelcomeCarouselItem item={item} />}
            onSnapToItem={(index) => setIndex(index)}
            sliderWidth={SIZES.width}
            itemWidth={SIZES.width}
          />
          <Pagination
            dotsLength={welcomeCarouselData.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={styles.dotStyle}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
          <Pressable
            style={styles.signUpBtn}
            activeOpacity={0.5}
            onPress={() => {
              if (index === welcomeCarouselData.length - 1) {
                navigation.navigate("Sign Up");
              } else {
                isCarousel.current.snapToNext();
              }
            }}
          >
            <Text style={styles.signUpBtnLabel}>
              {welcomeCarouselData[index].btnTitle}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
