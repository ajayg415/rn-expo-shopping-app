import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Colors from "../../constants/Colors";
import { addToCart } from "../../store/actions/cart";
import IconButton from "../../components/UI/IconButton";

const mapDispatchToProps = {
  addToCart,
};

const ProductDetailScreen = ({ navigation, route, addToCart }) => {
  const { product } = route.params;
  const { imageUrl, title, description, price } = product;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerRight: () => <IconButton iconName="md-cart" onIconPress={() => navigation.push('Cart')} />,
      headerLeft: () => <IconButton iconName="md-menu" onIconPress={() => navigation.openDrawer()} />,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.actions}>
        <Button
          title="Add To Cart"
          onPress={() => addToCart(product)}
          color={Colors.primary}
        />
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
    fontFamily: "open-sans-bold",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "open-sans",
  },
});

export default connect(null, mapDispatchToProps)(ProductDetailScreen);
