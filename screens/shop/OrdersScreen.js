import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import OrderItem from "../../components/shop/OrderItem";

const mapStateToProps = (state) => ({
  orders: state.orders.orders,
});

const OrdersScreen = ({ orders }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={orders}
        renderItem={(itemData) => {
          return (
            <OrderItem
              amount={itemData.item.totalAmount}
              date={itemData.item.readableDate}
              items={itemData.item.items}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
  },
});

export default connect(mapStateToProps)(OrdersScreen);
