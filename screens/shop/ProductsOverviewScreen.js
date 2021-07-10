import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";

const mapStateToProps = (state) => ({
  products: state.products.availableProducts,
});

const ProductsOverviewScreen = ({ products, navigation }) => {
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
                productId: itemData.item.id,
                title: itemData.item.title,
              });
            }}
            onAddToCart={() => {}}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default connect(mapStateToProps)(ProductsOverviewScreen);
