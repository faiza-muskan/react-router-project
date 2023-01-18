import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/product"> The List Of Product</Link>
      </p>
    </>
  );
};

export default Home;
