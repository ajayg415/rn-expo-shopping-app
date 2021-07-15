import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ item, onRemove, deletable = true }) => {
  const { quantity, title, price } = item;
  return (
    <View style={styles.cardItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{quantity}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.amt}>${price.toFixed(2)}</Text>
        {deletable && (
          <TouchableOpacity onPress={onRemove} style={styles.deleteBtn}>
            <Ionicons name={"md-trash"} size={23} color={"red"} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  itemData: {
    flexDirection: "row",
  },
  quantity: {
    fontFamily: "open-sans",
    color: "#888",
    fontSize: 16,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  amt: { fontFamily: "open-sans-bold", fontSize: 16 },
  deleteBtn: {
    marginLeft: 20,
  },
});

export default CartItem;
