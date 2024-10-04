import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import React, { Component } from "react";
import CartContext from "./context/CartContext";

class App extends Component {
  state = { cartList: [] };
  incrementCartItemQuantity = () => {};
  decrementCartItemQuantity = () => {};
  removeAllCartItems = () => {};
  removeCartItem = () => {};
  addToCart = (productList) => {
    this.setState({ cartList: productList });
  };
  render() {
    return (
      // eslint-disable-next-line react/jsx-pascal-case
      <CartContext.Provider
        value={{
          // eslint-disable-next-line no-undef
          cartList,
          incrementCartItemQuantity: this.incrementCartItemQuantity(),
          decrementCartItemQuantity: this.decrementCartItemQuantity(),
          removeCartItem: this.removeCartItem(),
          removeAllCartItems: this.removeAllCartItems(),
          addToCart: this.addToCart(),
        }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<ProductDetails />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    );
  }
}

export default App;
