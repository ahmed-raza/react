import React, { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
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
    <>
      <UserMeals user_id={user && user.id} />
    </>
  );
};

export default Home;
