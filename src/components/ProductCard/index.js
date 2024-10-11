import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export default function ProductCard(props) {
  const { product } = props;
  const { id, title, description, image, price, category,rating={} } = product;
 
  return (
    <li className="productItemContainer">
      <Link className="productLink" to={`/products/${id}`}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={image} className="productImg" />
        <h1 className="heading">{title}</h1>
        <h6>{price}</h6>
        <p>{rating.rate}</p>
        {/* <p>{description}</p> */}
        <p>{category}</p>
      </Link>
    </li>
  );
}
