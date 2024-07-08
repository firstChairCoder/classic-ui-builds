import { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

import { AreaModal, FocusedStatusBar, SignUpForm } from "../components";
import { COLORS, FONTS, IMAGES, SIZES } from "../constants";

const styles = StyleSheet.create({
  flex: { flex: 1 },
  logoWrapper: {
    alignItems: "center",
    height: 100,
    justifyContent: "center",
    marginVertical: SIZES.font
  },
  logo: { width: "60%" },
  bottomContent: {
    marginBottom: SIZES.font,
    marginHorizontal: SIZES.medium * 2,
    marginTop: SIZES.font * 2
  },
  continueBtn: {
    alignItems: "center",
    backgroundColor: COLORS.black,
    borderRadius: SIZES.font * 1.25,
    justifyContent: "center",
    padding: SIZES.font
  },
  continue: { color: COLORS.white, ...FONTS.h4 }
});

export const SignUpScreen = ({ navigation }) => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const isMounted = useRef(true);

  const fetchAreas = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const jsonData = await response.json();

    let data = jsonData.map((item) => {
      return {
        code: item.alpha2Code,
        name: item.name,
        callingCode: `+${item.callingCodes[0]}`,
        flag: item.flags.png
      };
    });

    if (isMounted.current) {
      setAreas(data);
      if (data.length > 0) {
        let defaultData = data.filter((a) => a.code === "US");

        if (defaultData.length > 0) {
          setSelectedArea(defaultData[0]);
        }
      }
    }
  };

  useEffect(() => {
    isMounted.current = true;

    fetchAreas();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <SafeAreaView style={styles.flex}>
      <FocusedStatusBar backgroundColor={COLORS.lime} />
      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={styles.flex}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.flex}>
            <View style={styles.logoWrapper}>
              <Image
                source={IMAGES.wallieLogo}
                resizeMode="contain"
                style={styles.logo}
              />
            </View>

            <SignUpForm
              selectedArea={selectedArea}
              setModalVisible={setModalVisible}
            />

            <AreaModal
              areas={areas}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              setSelectArea={setSelectedArea}
            />

            <View style={styles.bottomContent}>
              <Pressable
                style={styles.continueBtn}
                onPress={() => navigation.navigate("Tabs")}
              >
                <Text style={styles.continue}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};
