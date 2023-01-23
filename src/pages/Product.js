import { Link } from "react-router-dom";
import React from "react";

const products = [
  { title: "product-1", id: "p1" },
  { title: "product-2", id: "p2" },
  { title: "product-3", id: "p3" },
];
const Product = () => {
  return (
    <>
      <h1>Product Page</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Product;
