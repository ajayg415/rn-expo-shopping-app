import React, { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from "../../components/shop/ProductItem";
import { addToCart } from "../../store/actions/cart";
import IconButton from "../../components/UI/IconButton";

const mapStateToProps = (state) => ({
  products: state.products.availableProducts,
});

const mapDispatchToProps = {
  addToCart,
};

const ProductsOverviewScreen = ({ products, navigation, addToCart }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton iconName={"md-cart"} onIconPress={() => navigation.push('Cart')} />,
      headerLeft: () => <IconButton iconName="md-menu" onIconPress={() => navigation.openDrawer()} />,
    });
  }, [navigation]);

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsOverviewScreen);
