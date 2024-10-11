import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductDetailsWrapper from "./components/ProductDetailsWrapper";
import React, { Component } from "react";
import CartContext from "./context/CartContext";

class App extends Component {
  state = { cartList: [] };
  incrementCartItemQuantity = (id) => {
    this.setState((prevState=>({
      cartList:prevState.cartList.map(eachCartItem=>{
        if(eachCartItem.id===id){
          const updateQuantiy = eachCartItem.quantity+1
          return {...eachCartItem,quantity:updateQuantiy}
        }
        return eachCartItem
      })
    })))
  };
  decrementCartItemQuantity = (id) => {
    const { cartList } = this.state;
    const productObject = cartList.find(each=>each.id===id)
    if(productObject.quantity>1){
      this.setState((prevState=>({
        cartList:prevState.cartList.map(eachCartItem=>{
          if(eachCartItem.id===id){
            const updateQuantiy = eachCartItem.quantity-1
            return {...eachCartItem,quantity:updateQuantiy}
          }
          return eachCartItem
        })
      })))
    }
  };
  removeAllCartItems = () => {
    this.setState({cartList:[]})
  };
  removeCartItem = (id) => {
    const { cartList } = this.state;
    const itemRemovedList = cartList.filter((eachItem)=>eachItem.id!==id)
    this.setState({cartList:itemRemovedList})

  };
  addToCart = (productList) => {
    const { cartList } = this.state;
    const productObject = cartList.find(each=>each.id===productList.id)
    if(productObject){
      this.setState(prevState=>({
        cartList:prevState.cartList.map(eachItem=>{
          if(eachItem.id===productObject.id){
            const updatedQuantity = eachItem.quantity+productList.quantity
            return {...eachItem,quantity:updatedQuantity}
          }
          return eachItem
        })
      }))
    }else{
      const updated = [...cartList, productList];
      this.setState({ cartList: updated });
    }
  };
  render() {
    const { cartList } = this.state;

    return (
      // eslint-disable-next-line react/jsx-pascal-case
      <CartContext.Provider
        value={{
          // eslint-disable-next-line no-undef
          cartList,
          addToCart: this.addToCart,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route
            exact
            path="/products/:id"
            element={<ProductDetailsWrapper />}
          />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    );
  }
}

export default App;
