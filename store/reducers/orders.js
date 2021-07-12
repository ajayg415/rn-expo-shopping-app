import { ADD_ORDER } from "../actions/orders";
import Order from "../../models/order";

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const { items, totalAmount } = action.orderData;
      const newOrder = new Order(
        new Date().toString(),
        items,
        totalAmount,
        new Date()
      );
      return {
        ...state,
        orders: [...state.orders, newOrder],
      };
    default:
      return state;
  }
};
