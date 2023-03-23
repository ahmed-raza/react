import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Messages from "../UI/Messages";
import { getAuthToken } from "../util/auth";

const UserSettings = () => {
  const [user, setUser] = useState();
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
      .get("http://127.0.0.1:8000/api/user", {
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

  const caloriesChangeHandler = (event) => {
    setCalories(event.target.value);
  };

  const userUpdateSubmitHandler = (event) => {
    event.preventDefault();
    const token = getAuthToken();
    const userData = { name, email, role, calories };
    axios
      .put("http://127.0.0.1:8000/api/my-settings/" + user.id, userData, {
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
      <h1>Settings</h1>
      {messages && <Messages messages={messages} />}
      <Row>
        <Col lg="4">
          <Form onSubmit={userUpdateSubmitHandler}>
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
            <Button as="input" type="submit" value="Save" />
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default UserSettings;
