import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>An error occurred!</h1>
      <p>Could not find this page!</p>
      <Link to="/">Go back home</Link>
    </>
  );
};

export default Error;
