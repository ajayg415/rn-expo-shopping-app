import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";

const mapStateFromProps = (state) => ({
  products: state.products.availableProducts,
});

const UserProductsScreen = ({ products }) => {
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => {
        return (
          <ProductItem
            item={itemData.item}
            onViewDetails={() => {}}
            onAddToCart={() => {}}
          />
        );
      }}
    />
  );
};

export default connect(mapStateFromProps)(UserProductsScreen);
