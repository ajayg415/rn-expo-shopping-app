import React, { useEffect } from "react";
import { View, Button, Text, StyleSheet, ScrollView, Image } from "react-native";

import Colors from "../../constants/Colors";

const ProductDetailScreen = ({ navigation, route }) => {
  const { product } = route.params;
  const { imageUrl, title, description, price } = product;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.actions}>
        <Button title="Add To Cart" onPress={() => {}} color={Colors.primary} />
      </View>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: { height: 300, width: "100%" },
  actions: { marginVertical: 10, alignItems: "center" },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: { fontSize: 14, textAlign: "center", marginHorizontal: 20 },
});

export default ProductDetailScreen;
