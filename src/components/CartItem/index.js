import React from "react";
import CartContext from "../../context/CartContext";

export default function CartItem(props) {
  const { products } = props;
  const { image, price, title, quantity, id } = products;
  return (
    <CartContext.Consumer>
      {(value) => {
        const { incrementCartItemQuantity, decrementCartItemQuantity,removeCartItem } = value;
        const decreaseBtn = () => {
          decrementCartItemQuantity(id);
        };
        const inceaseBtn =()=>{
            incrementCartItemQuantity(id)
        }
        const removeItem=()=>{
            removeCartItem(id)
        }
        return (
          <div>
            <img src={image} />
            <p>{title}</p>
            <p>{price}</p>
            <button onClick={decreaseBtn}>-</button>
            <p>{quantity}</p>
            <button onClick={inceaseBtn}>+</button>
            <button onClick={removeItem}>remove</button>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
}
