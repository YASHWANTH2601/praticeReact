import React from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../ProductDetails"; // Import your class component

// Functional wrapper to get URL params and pass to the class component
const ProductDetailsWrapper = () => {
  let { id } = useParams(); // Get 'id' from the URL params
  return <ProductDetails id={id} />; // Pass the 'id' as a prop to the class component
};

export default ProductDetailsWrapper;
