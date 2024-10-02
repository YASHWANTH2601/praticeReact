import React, { Component } from "react";
import ProductCard from "../ProuctCard";

export default class productDetails extends Component {
  state = { productList: [] };
  componentDidMount() {
    this.makeApiCall();
  }
  makeApiCall = async () => {
    // event.preventDefault()
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const api = `https://fakestoreapi.com/products/${id}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(api, options);
    if (response.ok) {
      const data = await response.json();
      this.setState({ productList: data });
    }
  };
  render() {
    const { productList } = this.state;
    const { title, description, image, price } = productList;
    return (
      <>
         {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={image} />
        <h1>{title}</h1>
        <h6>{price}</h6>
        <p>{description}</p>
      </>
    );
  }
}
