import { cartActionTypes } from "../types/cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = itemId => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: itemId
}) 

export const decrementItem = item => ({
  type: cartActionTypes.DECREMENT_ITEM,
  payload: item
})