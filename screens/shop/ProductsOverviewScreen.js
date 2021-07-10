import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";
import {addToCart} from '../../store/actions/cart'

const mapStateToProps = (state) => ({
  products: state.products.availableProducts,
});

const mapDispatchToProps = {
  addToCart
}

const ProductsOverviewScreen = ({ products, navigation, addToCart }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            item={itemData.item}
            onViewDetails={() => {
              navigation.navigate("Details", {
                product: itemData.item,
              });
            }}
            onAddToCart={() => addToCart(itemData.item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsOverviewScreen);
