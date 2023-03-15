import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import MainNavigation from "./UI/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
