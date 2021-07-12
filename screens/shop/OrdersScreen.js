import React from "react";
import { FlatList, Text } from "react-native";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  orders: state.orders.orders,
});

const OrdersScreen = ({ orders }) => {
    console.log({orders})
  return (
    <FlatList
      data={orders}
      renderItem={(itemData) => {
        return <Text>{itemData.item.totalAmount}</Text>;
      }}
    />
  );
};

export default connect(mapStateToProps)(OrdersScreen);
