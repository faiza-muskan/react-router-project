import { useNavigate } from "react-router-dom";
import React from "react";

const Home = () => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("product");
  };
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={navigationHandler}>product</button>
    </>
  );
};

export default Home;
