import { useIsFocused } from "@react-navigation/native";
import { Camera } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, FONTS, ICONS, IMAGES, SIZES } from "../constants";
import { FocusedStatusBar, ScanPaymentMethods } from "../components";

const styles = StyleSheet.create({
  flex: { flex: 1 },
  scanHeaderWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.medium
  },
  focusWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: "20%"
  },
  focusImage: {
    height: 210,
    width: "50%"
  },
  noAccessWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: SIZES.font
  },
  noAccess: { ...FONTS.body4, color: COLORS.primary },
  close: {
    height: 15,
    tintColor: COLORS.white,
    width: 15
  },
  headerWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  header: { ...FONTS.body3, color: COLORS.white },
  infoImageWrapper: {
    alignItems: "center",
    height: 30,
    justifyContent: "center",
    width: 30
  },
  infoImage: {
    height: "80%",
    tintColor: COLORS.primary,
    width: "80%"
  }
});

function ScanHeader({ navigation }) {
  return (
    <View style={styles.scanHeaderWrapper}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Image source={ICONS.close} style={styles.close} />
      </Pressable>

      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Scan for Payment</Text>
      </View>

      <Pressable style={styles.infoImageWrapper}>
        <Image source={ICONS.info} style={styles.infoImage} />
      </Pressable>
    </View>
  );
}

export const ScanScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const isFocused = useIsFocused();
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <SafeAreaView style={styles.flex}>
        <FocusedStatusBar
          backgroundColor={COLORS.white}
          barStyle="dark-content"
        />
        <View style={styles.noAccessWrapper}>
          <Text style={styles.noAccess}>No access to camera</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.flex}>
      {isFocused && (
        <Camera
          ref={cameraRef}
          style={styles.flex}
          captureAudio={false}
          type={Camera.Constants.Type.back}
          flashMode={Camera.Constants.FlashMode.off}
          onBarCodeScanned={(result) => console.log("Scanned", result.data)}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "Camera is required for barcode scanning",
            buttonPositive: "OK",
            buttonNegative: "Cancel"
          }}
        >
          <ScanHeader navigation={navigation} />
          <View style={styles.focusWrapper}>
            <Image
              source={IMAGES.focus}
              resizeMode="stretch"
              style={styles.focusImage}
            />
          </View>

          <ScanPaymentMethods />
        </Camera>
      )}
    </SafeAreaView>
  );
};
