import React from "react";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import classes from "../Styles/nav.module.css";

const MainNavigation = () => {
  const token = useRouteLoaderData("root");

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
          <li>
            <Form action="/logout" method="POST">
              <button>Logout</button>
            </Form>
          </li>
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
