import React, { Component } from "react";
import CartContext from "../../context/CartContext";
// import CartItem from "../CartItem";
import Header from "../Header"
export default class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          

          return (
            <>
            <Header />
              {/* {cartList.length > 0 ? (
                <ul>
                  {cartList.map((eachProduct) => (
                    <CartItem />
                  ))}
                </ul>
              ) : (
                <>Ntg</>
              )} */}
            </>
          );
        }}
      </CartContext.Consumer>
    );
  }
}
