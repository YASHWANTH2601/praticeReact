import React from "react";

const CartContext = React.createContext({
  cartList: [],
  addToCart: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  removeCartItem: () => {},
  removeAllCartItems: () => {},
});

export default CartContext;
