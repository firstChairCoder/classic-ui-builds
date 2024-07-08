import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

import { FONTS, SIZES } from "../constants";
import { featuresData } from "../data";

const styles = StyleSheet.create({
  container: { marginVertical: SIZES.font },
  featuresColumn: {
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  header: { ...FONTS.h3 },
  itemWrapper: {
    alignItems: "center",
    flex: 1,
    margin: SIZES.padding
  },
  iconWrapper: {
    alignItems: "center",
    borderRadius: 20,
    height: 50,
    justifyContent: "center",
    marginVertical: 5,
    width: 50
  },
  description: {
    flexWrap: "wrap",
    textAlign: "center",
    ...FONTS.body5,
    width: "100%"
  },
  icon: {
    height: 20,
    width: 20
  }
});

function HomeFeaturesItem({ item }) {
  return (
    <Pressable style={styles.itemWrapper} onPress={() => true}>
      <View
        style={
          ([styles.iconWrapper],
          {
            backgroundColor: item.backgroundColor
          })
        }
      >
        <Image
          source={item.icon}
          resizeMode="contain"
          style={[styles.icon, { tintColor: item.color }]}
        />
      </View>
      <Text style={styles.description}>{item.description}</Text>
    </Pressable>
  );
}

const HomeFeatures = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={featuresData}
        numColumns={4}
        columnWrapperStyle={styles.featuresColumn}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <HomeFeaturesItem item={item} navigation={navigation} />
        )}
        ListHeaderComponent={<Text style={styles.header}>Features</Text>}
      />
    </View>
  );
};

export default HomeFeatures;
