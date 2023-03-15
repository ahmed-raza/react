import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import Card from "../UI/Card";
import { getAuthUser } from "../util/auth";

const Home = () => {
  const token = useRouteLoaderData("root");
  const user = getAuthUser();

  return (
    <Card title="Calories Management System">
      <p>Welcome to the calories management system.</p>
      {token && <p>Hi {user.name}!</p>}
    </Card>
  );
};

export default Home;
