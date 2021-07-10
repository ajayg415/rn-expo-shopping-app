import React, { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from "../../components/shop/ProductItem";
import { addToCart } from "../../store/actions/cart";
import HeaderButton from '../../components/UI/HeaderButton'

const mapStateToProps = (state) => ({
  products: state.products.availableProducts,
});

const mapDispatchToProps = {
  addToCart,
};

const ProductsOverviewScreen = ({ products, navigation, addToCart }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons component={HeaderButton}>
          <Item
            title="cart"
            iconName={"md-cart"}
            onPress={() => navigation.push('Cart')}
          />
        </HeaderButtons>
      ),
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
