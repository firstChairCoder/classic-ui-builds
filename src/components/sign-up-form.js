import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import { COLORS, FONTS, ICONS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.font * 2,
    paddingHorizontal: SIZES.medium * 2
  },
  inputHeading: { color: COLORS.lightGreen, ...FONTS.body5 },
  input: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    color: COLORS.white,
    marginVertical: SIZES.base,
    ...FONTS.body4,
    fontFamily: "Light"
  },
  contentSection: { marginTop: SIZES.font },
  passwordInput: {
    flex: 1,
    ...FONTS.body4,
    color: COLORS.white,
    fontFamily: "Light"
  },
  phoneNumberContentWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: SIZES.base
  },
  modalWrapper: {
    alignItems: "center",
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 5,
    paddingRight: SIZES.base,
    ...FONTS.body2
  },
  phoneContentSeparator: { justifyContent: "center", marginLeft: 5 },
  flagImage: {
    height: 30,
    width: 30
  },
  callCode: {
    color: COLORS.white,
    textAlign: "center",
    ...FONTS.body4
  },
  phoneNumInput: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    color: COLORS.white,
    flex: 1,
    ...FONTS.body4
  },
  showHidePasswordIcon: {
    height: 25,
    tintColor: COLORS.white,
    width: 25
  },
  downIcon: {
    height: 10,
    marginRight: 5,
    tintColor: COLORS.white,
    width: 10
  },
  mainPasswordInputWrapper: {
    alignItems: "center",
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    color: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: SIZES.padding
  }
});

const SignUpForm = ({ selectedArea, setModalVisible }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.inputHeading}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          placeholderTextColor={COLORS.lightGray}
          selectionColor={COLORS.white}
        />
      </>

      <View style={styles.contentSection}>
        <Text style={styles.inputHeading}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email address"
          placeholderTextColor={COLORS.lightGray}
          selectionColor={COLORS.white}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.inputHeading}>Phone Number</Text>
        <View style={styles.phoneNumberContentWrapper}>
          <Pressable
            style={styles.modalWrapper}
            onPress={() => setModalVisible(true)}
          >
            <View
              style={[styles.phoneContentSeparator, { marginLeft: "auto" }]}
            >
              <Image source={ICONS.down} style={styles.downIcon} />
            </View>
            <View style={styles.phoneContentSeparator}>
              <Image
                source={{ uri: selectedArea?.flag }}
                resizeMode="contain"
                style={styles.flagImage}
              />
            </View>

            <View style={styles.phoneContentSeparator}>
              <Text style={styles.callCode}>{selectedArea?.callingCode}</Text>
            </View>
          </Pressable>

          <TextInput style={styles.phoneNumInput} keyboardType="number-pad" />
        </View>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.inputHeading}>Password</Text>
        <View style={styles.mainPasswordInputWrapper}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? ICONS.disable_eye : ICONS.eye}
              style={styles.showHidePasswordIcon}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignUpForm;
