export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const REMOVE_ALL_ITEMS = "REMOVE_ALL_ITEMS"

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  product
})

export const removeAllItems = () => ({
  type: REMOVE_ALL_ITEMS
})
