import { useNavigate } from "react-router-dom";
import React from "react";

const Product = () => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Product Page</h1>
      <button onClick={navigationHandler}>Home</button>
    </>
  );
};

export default Product;
