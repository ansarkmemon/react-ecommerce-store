export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if(existingCartItem) {
    return cartItems.map(cartItem => (
      cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    ))
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}


export const decrementItemFromCart = (cartItems, itemToReduce) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToReduce.id
  );

  if (existingCartItem.quantity  === 1) {
    return cartItems.filter(item => item.id !== itemToReduce.id)
  };

  return cartItems.map(item => item.id === itemToReduce.id ? {...item, quantity: item.quantity - 1} : item)
}