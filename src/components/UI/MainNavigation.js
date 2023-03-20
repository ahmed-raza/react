import React, { useEffect, useState } from "react";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import classes from "../Styles/nav.module.css";
import { getAuthUser } from "../util/auth";

const MainNavigation = () => {
  const token = useRouteLoaderData("root");
  const isLoggedIn = token;
  const [user, setUser] = useState();

  useEffect(() => {
    if (isLoggedIn) {
      getAuthUser().then((response) => {
        setUser(response.data);
      });
    }
  }, [token, isLoggedIn]);

  return (
    <div className={classes.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Home
          </NavLink>
        </li>
        {token && (
          <>
            {user && user.role !== "user" && (
              <li>
                <NavLink to="/list-users">List Users</NavLink>
              </li>
            )}
            <li>
              <NavLink to="/my-account">My Account</NavLink>
            </li>
            <li>
              <Form action="/logout" method="POST">
                <button>Logout</button>
              </Form>
            </li>
          </>
        )}
        {!token && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default MainNavigation;
