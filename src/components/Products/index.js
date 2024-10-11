import React, { Component } from "react";
import ProductCard from "../ProductCard";
import Header from "../Header";
import "./index.css"
const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
export default class Products extends Component {
  state = { productList: [], categorys: categories[0] };
  componentDidMount() {
    this.makeApiCall();
  }
  makeApiCall = async () => {
    const { categorys } = this.state;
    // event.preventDefault()
    // const api = "https://fakestoreapi.com/products";
    const api = `https://fakestoreapi.com/products/category/${categorys}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(api, options);
    if (response.ok) {
      const data = await response.json();
      const filterData = data.filter((each) => each.category === categorys);
      // this.setState({ productList: data });
      this.setState({ productList: filterData });
    }
  };
  categoriesValue = (event) => {
    const { categorys } = this.state;
    const values = event.target.value;
    this.setState({ categorys: values }, this.makeApiCall);
  };
  render() {
    const { productList, categorys } = this.state;

    return (
      <>
        <Header />
        <div className="productsContainer">
        <div>
          <select value={categorys} onChange={this.categoriesValue}>
            {categories.map((each) => (
              <option value={each}>{each}</option>
            ))}
          </select>
        </div>
          {productList.length > 0 ? (
            <ul className="productListContainer">
              {productList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          ) : (
            <p>ntg</p>
          )}
        </div>
      </>
    );
  }
}
