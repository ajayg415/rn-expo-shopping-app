import React from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import { connect } from "react-redux";

import Colors from "../../constants/Colors";
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
            onSelect={() => {}}
          >
              <Button onPress={() => {}} title="Edit" color={Colors.primary}/>
              <Button onPress={() => {}} title="Delete" color={Colors.accent}/>
          </ProductItem>
        );
      }}
    />
  );
};

export default connect(mapStateFromProps)(UserProductsScreen);
