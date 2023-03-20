import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import MainNavigation from "./UI/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <Container>
        <MainNavigation />
        <Outlet />
      </Container>
    </>
  );
};

export default RootLayout;
