import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Messages from "../UI/Messages";
import { getAuthToken } from "../util/auth";

const EditUser = () => {
  const [user, setUser] = useState();
  const params = useParams();
  const user_id = params.id;
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [calories, setCalories] = useState();
  const [role, setRole] = useState();
  const [messages, setMessages] = useState();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const token = getAuthToken();
    await axios
      .get("http://127.0.0.1:8000/api/user/" + user_id, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setRole(response.data.role);
        setCalories(response.data.calories);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    // setEmail(event.target.value);
  };

  const roleChangeHandler = (event) => {
    setRole(event.target.value);
  };

  const caloriesChangeHandler = (event) => {
    setCalories(event.target.value);
  };

  const userUpdateSubmitHandler = (event) => {
    event.preventDefault();
    const token = getAuthToken();
    const userData = { name, email, role, calories };
    axios
      .patch("http://127.0.0.1:8000/api/update-user/" + user_id, userData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setMessages(response.data);
      })
      .catch(({ response }) => {
        setMessages(response.data);
      });
  };

  return (
    <>
      <h1>Edit User</h1>
      {messages && <Messages messages={messages} />}
      <Row>
        <Col lg="4">
          <Form onSubmit={userUpdateSubmitHandler}>
            <div className="mb-3">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={nameChangeHandler}
                />
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={emailChangeHandler}
                />
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  id="password"
                  onChange={passwordChangeHandler}
                />
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Select name="role" id="role" value={role}>
                  <option value="admin1">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="user">User</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group>
                <Form.Label>Calories</Form.Label>
                <Form.Control
                  type="number"
                  name="calories"
                  id="calories"
                  value={calories}
                  onChange={caloriesChangeHandler}
                />
              </Form.Group>
            </div>
            <Button as="input" type="submit" value="Update User" />
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default EditUser;
