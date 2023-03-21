import React, { useEffect, useState } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import Jumbotron from "../UI/Jumbotron";
import { getAuthUser } from "../util/auth";
import UserMeals from "./UserMeals";

const Home = () => {
  const token = useRouteLoaderData("root");
  const [user, setUser] = useState();

  useEffect(() => {
    if (token) {
      getAuthUser().then((response) => {
        setUser(response.data);
      });
    }
  }, [token]);

  return (
    <>
      {token ? (
        <UserMeals user_id={user && user.id} />
      ) : (
        <Jumbotron heading="Calories Management System">
          You must login to use this application.
          <hr className="mb-4" />
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </Jumbotron>
      )}
    </>
  );
};

export default Home;
