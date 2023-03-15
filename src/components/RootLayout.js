import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import MainNavigation from "./UI/MainNavigation";

const RootLayout = () => {
  const token = useLoaderData();

  console.log(token);

  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
