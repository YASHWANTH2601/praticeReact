// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "./index.css";
import CartContext from "../../context/CartContext";
import React, { Component } from "react";

export default class ProductDetails extends Component {
  state = { productList: [] ,quantity: 0 };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const { id } = this.props;
    const apiUrl = `https://fakestoreapi.com/products/${id}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const fetchedData = await response.json();
      this.setState({
        productData: fetchedData,
      });
    }
  };
   decrease = () => {
     const {  quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  };

   increase = () => {
     const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  };
  render() {
    const { productList, quantity } = this.state;
    const { image, description, rating = {}, price, title } = productList;
    return (
      <CartContext.Consumer>
        {(value) => {
          const { addToCart } = value;         
          const addtoCartHandle = () => {
            addToCart({ ...productList, quantity });
          };

          return (
            <>
              <img src={image} className="productImg" alt={title} />
              <h1>{title}</h1>
              <p>${price}</p>
              <p>Rating: {rating.rate}</p>
              <p>{description}</p>
              <button onClick={this.decrease}>-</button>
              <p>{quantity}</p>
              <button onClick={this.increase}>+</button>
              <button onClick={addtoCartHandle}>Add to Cart</button>
            </>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

// function ProductDetails() {
//   const [productList, setProductList] = useState({});
//   const [quantity, setQuantity] = useState(1);
//   let { id } = useParams();

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//       const json = await response.json();
//       setProductList(json);
//     }
//     fetchData();
//   }, [id]);

//   const { image, description, rating = {}, price, title } = productList;

//   return (
//     <CartContext.Consumer>
//       {(value) => {
//         const { addToCart } = value;

//         const decrease = () => {
//           if (quantity > 1) {
//             setQuantity(quantity - 1);
//           }
//         };

//         const increase = () => {
//           setQuantity(quantity + 1);
//         };

//         // Handle add to cart without directly affecting state during render
//         const addtoCartHandle = () => {
//           // Safely call addToCart when the button is clicked, not during rendering
//           addToCart({ ...productList, quantity });
//         };

//         return (
//           <>
//             {/* Render logic is now clean and ensures no state updates during rendering */}
//             <img src={image} className="productImg" alt={title} />
//             <h1>{title}</h1>
//             <p>${price}</p>
//             <p>Rating: {rating.rate}</p>
//             <p>{description}</p>
//             <button onClick={decrease}>-</button>
//             <p>{quantity}</p>
//             <button onClick={increase}>+</button>
//             <button onClick={addtoCartHandle}>Add to Cart</button>
//           </>
//         );
//       }}
//     </CartContext.Consumer>
//   );
// }

// export default ProductDetails;
