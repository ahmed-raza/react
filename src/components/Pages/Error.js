import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Container>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
        <Link to="/">Go back home</Link>
      </Container>
    </>
  );
};

export default Error;
