import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../../constants/Colors";

const ProductItem = ({ item, onSelect, children }) => {
  const { title, imageUrl, price } = item;
  const TouchableComp =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <TouchableComp onPress={onSelect}>
      <View style={styles.product}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>
        <View style={styles.buttons}>
          {children}
        </View>
      </View>
    </TouchableComp>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "50%",
  },
  details: {
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 18,
    margin: 4,
    fontFamily: "open-sans-bold",
  },
  price: {
    fontSize: 14,
    margin: 4,
    color: "#888",
    fontFamily: "open-sans",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
});

export default ProductItem;
