import React from "react";
import { Link } from "react-router-dom";
export default function ProductCard(props) {
  const { product } = props;
  const { id, title, description, image, price } = product;
 const clicked=()=>{
    console.log(id)
  }
  return (
      
      <li onClick={clicked}>
      <Link to={`/products/${id}`}>
         {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={image} />
        <h1>{title}</h1>
        <h6>{price}</h6>
        <p>{description}</p>
      </Link>
    </li>
  );
}
