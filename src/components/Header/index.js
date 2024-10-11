import React from "react";
import { Link } from "react-router-dom";
import "./index.css"
export default function Header() {
  return (
    <nav className="navBar">
      <ul className="navlist">
        <li >
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
