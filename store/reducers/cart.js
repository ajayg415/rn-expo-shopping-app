import CartItem from "../../models/cart-item";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_ITEMS,
} from "../actions/cart";
import { DELETE_PRODUCT } from "../actions/products";

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
    case REMOVE_FROM_CART:
      const updatedCartItems = { ...state.items };
      delete updatedCartItems[action.product.id];
      return {
        ...state,
        items: updatedCartItems,
        totalAMount:
          state.totalAMount - action.product.price * action.product.quantity,
      };
    case DELETE_PRODUCT:
      if(!state.items[action.id]){
        return state; 
      }
      const updatedItems = {...state.items}
      const itemTotal = state.items[action.id].sum
      delete updatedItems[action.id]
      return {
        ...state,
        item: updatedItems,
        totalAMount: state.totalAMount - itemTotal
      }
    case REMOVE_ALL_ITEMS:
      return initialState;
    default:
      return initialState;
  }
};
