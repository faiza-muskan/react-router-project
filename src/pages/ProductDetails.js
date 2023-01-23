import { useParams, Link } from "react-router-dom";
import React from "react";

const ProductDeatail = () => {
  const params = useParams();
  return (
    <>
      <h1>Product detail</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDeatail;
