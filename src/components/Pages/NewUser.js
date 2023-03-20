import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import { Button, Col, Form as bForm, Row } from "react-bootstrap";
import Messages from "../UI/Messages";
import { getAuthToken } from "../util/auth";

const NewUser = () => {
  const [messages, setMessages] = useState();
  const data = useActionData();
  useEffect(() => {
    if (data !== undefined && (data.errors || data.message)) {
      setMessages(data);
    }
  }, [data]);
  return (
    <>
      <h1>Add new user</h1>
      {messages && <Messages messages={messages} />}
      <Row>
        <Col lg="4">
          <Form method="post">
            <div className="mb-3">
              <bForm.Group>
                <bForm.Label>Name</bForm.Label>
                <bForm.Control type="text" name="name" id="name" />
              </bForm.Group>
            </div>
            <div className="mb-3">
              <bForm.Group>
                <bForm.Label>Email</bForm.Label>
                <bForm.Control type="email" name="email" id="email" />
              </bForm.Group>
            </div>
            <div className="mb-3">
              <bForm.Group>
                <bForm.Label>Password</bForm.Label>
                <bForm.Control type="password" name="password" id="password" />
              </bForm.Group>
            </div>
            <div className="mb-3">
              <bForm.Group>
                <bForm.Label>Name</bForm.Label>
                <bForm.Select name="role" id="role">
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="user">User</option>
                </bForm.Select>
              </bForm.Group>
            </div>
            <div className="mb-3">
              <bForm.Group>
                <bForm.Label>Calories</bForm.Label>
                <bForm.Control type="number" name="calories" id="calories" />
              </bForm.Group>
            </div>
            <Button as="input" type="submit" value="Add User" />
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default NewUser;

export async function newUserAction({ request }) {
  const data = await request.formData();
  const token = getAuthToken();

  const user = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
    role: data.get("role"),
    calories: data.get("calories"),
  };

  const newUser = await axios
    .post("http://127.0.0.1:8000/api/new-user", user, {
      headers: {
        "Content-Type": "application/json",
        Accept: "applicaton/json",
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return redirect("/list-users");
    })
    .catch(({ response }) => {
      return response.data;
    });

  return newUser;
}
