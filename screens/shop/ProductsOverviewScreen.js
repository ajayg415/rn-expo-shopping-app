import React, { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import { connect } from "react-redux";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from "../../components/shop/ProductItem";
import { addToCart } from "../../store/actions/cart";
import IconButton from "../../components/UI/IconButton";
import Colors from "../../constants/Colors";
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
        <IconButton
          iconName={"md-cart"}
          onIconPress={() => navigation.push("Cart")}
        />
      ),
      headerLeft: () => (
        <IconButton
          iconName="md-menu"
          onIconPress={() => navigation.openDrawer()}
        />
      ),
    });
  }, [navigation]);
  
  const itemSelect = (product) => {
    navigation.navigate("Details", {
      product,
    });
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            item={itemData.item}
            onSelect={() => itemSelect(itemData.item)}
          >
            <>
              <Button
                title="View Details"
                onPress={() => itemSelect(itemData.item)}
                color={Colors.primary}
              />
              <Button
                title="Add To Cart"
                onPress={() => addToCart(itemData.item)}
                color={Colors.accent}
              />
            </>
          </ProductItem>
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
