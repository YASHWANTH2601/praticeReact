import React, { Component } from "react";
import ProductCard from "../ProuctCard";

export default class Products extends Component {
  state = { productList: [] };
  componentDidMount() {
    this.makeApiCall();
  }
  makeApiCall = async () => {
    // event.preventDefault()
    const api = "https://fakestoreapi.com/products";
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
    
    return (
      <>
        {productList.length > 0 ? (
          <ul>
            {productList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        ) : (
          <p>ntg</p>
        )}
      </>
    );
  }
}
