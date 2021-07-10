import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  products: state.products.availableProducts,
});

const ProductsOverviewScreen = ({ products }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return <Text>{itemData.item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default connect(mapStateToProps)(ProductsOverviewScreen);
