import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Colors from "../../constants/Colors";
import CartItem from "./CartItem";

const OrderItem = ({ amount, date }) => {
    console.log({amount})
    console.log({date})
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${amount.toFixed(2)}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Button title="Show Details" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 10,
    margin: 20,
    padding: 10,
    alignItems: 'center'
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  totalAmount: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  date: {
    fontFamily: "open-sans",
    fontSize: 16,
    color: "#888",
  },
});

export default OrderItem;
