import React from "react";

import MainNavigation from "../components/MainNavigation";

const Error = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred</h1>
        <p>couldn't find the page!</p>
      </main>
    </>
  );
};

export default Error;
