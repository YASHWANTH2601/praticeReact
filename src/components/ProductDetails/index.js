import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import CartContext from "../../context/CartContext";

function ProductDetails() {
  const [productList, setProductList] = useState({});
  const [quantity,setQuantity]= useState(0)
  let { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await response.json();
      setProductList(json);
    }
    fetchData();
  }, [id]);
  // const objs = {
  //   category: "men's clothing",
  //   description:
  //     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   id: 1,
  //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   price: 109.95,
  //   rating: { rate: 3.9, count: 120 },
  // };

  const { image, description,rating, price, title } = productList;
  
  return (
    <CartContext.Consumer>
      {(value) => {
        const {incrementCartItemQuantity,decrementCartItemQuantity,addToCart}=value
     const decrease=()=>{
      if(quantity>1){
        setQuantity(quantity-1)
      }
     }
     const increase=()=>{
      setQuantity(quantity+1)
     }
       const addtoCart=()=>{
          addToCart({...productList,quantity})
          console.log(id)
        }

        return (
          <>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={image} className="productImg" />
            <h1>{title}</h1>
            <p>{price}</p>
            {/* <p>{rating.rate}</p> */}
            <p>{description}</p>
            <button onClick={this.decrease}>-</button>
            <p>price</p>
            <button onClick={this.increase}>+</button>
            <button onClick={this.addtoCart}>Add to Cart</button>
          </>
        );
      }}
    </CartContext.Consumer>
  );
}
export default ProductDetails;
