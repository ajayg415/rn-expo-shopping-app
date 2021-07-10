import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import Colors from "../../constants/Colors";

const ProductItem = ({ item }) => {
  console.log(item);
  const {
    id,
    ownerId,
    title,
    imageUrl,
    description,
    price,
    onViewDetails,
    onAddToCart,
  } = item;
  return (
    <View style={styles.product}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="View Details" onPress={onViewDetails} color={Colors.primary}/>
        <Button title="Add To Cart" onPress={onAddToCart} color={Colors.accent}/>
      </View>
    </View>
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
    height: "60%",
  },
  details: {
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 18,
    margin: 4,
  },
  price: {
    fontSize: 14,
    margin: 4,
    color: "#888",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
});

export default ProductItem;
