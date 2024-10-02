import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/products/:id" element={<ProductDetails />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
