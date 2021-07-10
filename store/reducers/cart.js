import CartItem from "../../models/cart-item";
import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  items: {},
  totalAMount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product } = action;
      const { price, title, id } = product;
      let newOrUpdatedCartItem;

      if (state.items[id]) {
        const item = state.items[id];
        newOrUpdatedCartItem = new CartItem(
          item.quantity + 1,
          price,
          title,
          item.sum + price
        );
      } else {
        newOrUpdatedCartItem = new CartItem(1, price, title, price);
      }

      return {
        ...state,
        items: { ...state.items, [id]: newOrUpdatedCartItem },
        totalAMount: state.totalAMount + price,
      };
    default:
      return initialState;
  }
};
