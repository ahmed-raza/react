import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Form, Link, NavLink, useRouteLoaderData } from "react-router-dom";
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
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              {user && user.role !== "user" && (
                <>
                  <LinkContainer to="list-users">
                    <Nav.Link>List Users</Nav.Link>
                  </LinkContainer>
                </>
              )}
              {token && (
                <NavDropdown title={user && user.name} id="basic-nav-dropdown">
                  <LinkContainer to="/my-account">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/my-settings">
                    <NavDropdown.Item>Set Calories</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <Form action="/logout" method="post">
                    <Button type="submit">Logout</Button>
                  </Form>
                </NavDropdown>
              )}
              {!token && (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                    <Nav.Link>Sign Up</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavigation;
