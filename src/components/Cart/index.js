import React, { Component } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem";
import Header from "../Header";

export default class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList,removeAllCartItems } = value;
         const removeAll=()=>{
          removeAllCartItems()
         }
          return (
            <>
              <Header />
              {cartList.length > 0 ? (
                <ul>
                <button onClick={removeAll}>Remove All</button>
                  {cartList.map((eachProduct) => (
                    <CartItem products={eachProduct} key={eachProduct.id} />
                  ))}
                </ul>
              ) : (
                <>Ntg</>
              )}
            </>
          );
        }}
      </CartContext.Consumer>
    );
  }
}
