import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

import CartItem from "../../components/shop/CartItem";
import Colors from "../../constants/Colors";

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  cartAmount: state.cart.totalAMount,
});

const CartScreen = ({ cartItems, cartAmount }) => {
  let items = [];
  for (const key in cartItems) {
    items.push({
      id: key,
      title: cartItems[key].title,
      price: cartItems[key].price,
      quantity: cartItems[key].quantity,
      sum: cartItems[key].sum,
    });
  }

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${cartAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          color={Colors.accent}
          disabled={cartAmount === 0}
        />
      </View>
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <CartItem item={itemData.item} onRemove={() => {}} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    paddingHorizontal: 10,
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});

export default connect(mapStateToProps)(CartScreen);
