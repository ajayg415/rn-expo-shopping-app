import React, { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import { connect } from "react-redux";

import Colors from "../../constants/Colors";
import ProductItem from "../../components/shop/ProductItem";
import { deleteProduct } from "../../store/actions/products";
import IconButton from "../../components/UI/IconButton";

const mapStateFromProps = (state) => ({
  products: state.products.availableProducts,
});

const mapDispatchToProps = {
  deleteProduct,
};

const UserProductsScreen = ({ products, deleteProduct, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <IconButton
          iconName="md-menu"
          onIconPress={() => navigation.toggleDrawer()}
        />
      ),
      headerRight: () => (
        <IconButton
          iconName="md-create"
          onIconPress={() => navigation.navigate('EditProduct')}
        />
      ),
    });
  }, [navigation]);

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => {
        return (
          <ProductItem
            item={itemData.item}
            onSelect={() =>
              navigation.navigate("EditProduct", {
                item: itemData.item,
              })
            }
          >
            <Button
              onPress={() =>
                navigation.navigate("EditProduct", {
                  item: itemData.item,
                })
              }
              title="Edit"
              color={Colors.primary}
            />
            <Button
              onPress={() => deleteProduct(itemData.item.id)}
              title="Delete"
              color={Colors.accent}
            />
          </ProductItem>
        );
      }}
    />
  );
};

export default connect(
  mapStateFromProps,
  mapDispatchToProps
)(UserProductsScreen);
