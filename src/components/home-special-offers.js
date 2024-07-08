import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";
import { specialPromoData } from "../data";

const styles = StyleSheet.create({
  container: { marginVertical: SIZES.font },
  headerWrapper: { flexDirection: "row", marginBottom: SIZES.padding },
  flex: { flex: 1 },
  promos: { ...FONTS.h3 },
  viewAll: { color: COLORS.darkgray2, ...FONTS.body4 },
  itemWrapper: {
    flex: 1,
    margin: 5
  },
  itemImageWrapper: {
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
    height: 90
  },
  itemImage: {
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
    height: "100%",
    width: "100%"
  },
  itemTextWrapper: {
    backgroundColor: COLORS.lightGray,
    borderBottomLeftRadius: SIZES.font,
    borderBottomRightRadius: SIZES.font,
    padding: SIZES.padding
  },
  itemTitle: { ...FONTS.body4, fontFamily: "ExtraBold" },
  itemDescription: { ...FONTS.body5, marginTop: 5 }
});

function HomeSpecialOffersItem({ item }) {
  return (
    <Pressable style={styles.itemWrapper}>
      <View style={styles.itemImageWrapper}>
        <Image source={item.img} resizeMode="cover" style={styles.itemImage} />
      </View>

      <View style={styles.itemTextWrapper}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </Pressable>
  );
}

const HomeSpecialOffers = () => {
  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={specialPromoData}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => <HomeSpecialOffersItem item={item} />}
        ListHeaderComponent={
          <View style={styles.headerWrapper}>
            <View style={styles.flex}>
              <Text style={styles.promos}>Special Promos</Text>
            </View>
            <Pressable>
              <Text style={styles.viewAll}>View All</Text>
            </Pressable>
          </View>
        }
      />
    </View>
  );
};

export default HomeSpecialOffers;
