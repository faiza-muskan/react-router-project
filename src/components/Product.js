import { Link } from "react-router-dom";
import React from "react";

const Product = () => {
  return (
    <>
      <h1>Product Page</h1>
      <p>
        go to <Link to="/">the home Page</Link>
      </p>
    </>
  );
};

export default Product;
