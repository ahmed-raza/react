import React, { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import Card from "../UI/Card";
import { getAuthUser } from "../util/auth";
import UserMeals from "./UserMeals";

const Home = () => {
  const token = useRouteLoaderData("root");
  const [user, setUser] = useState();

  useEffect(() => {
    getAuthUser().then((response) => {
      setUser(response.data);
    });
  }, [token]);

  return (
    <Card title="Calories Management System">
      <p>Welcome to the calories management system.</p>
      <UserMeals user_id={user && user.id} />
    </Card>
  );
};

export default Home;
