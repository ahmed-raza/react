import { redirect } from "@remix-run/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form as RForm, useActionData } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import Messages from "../UI/Messages";

const Signup = () => {
  const [messages, setMessages] = useState();
  const data = useActionData();

  useEffect(() => {
    if (data !== undefined && (data.data.errors || data.data.message)) {
      setMessages(data.data);
    }
  }, [data]);

  return (
    <>
      <h1>Sign Up</h1>
      {messages && <Messages messages={messages} />}
      <Row>
        <Col lg="4">
          <RForm method="post" autoComplete="off">
            <div className="mb-3">
              <Form.Group>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control type="text" name="name" id="name" />
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control type="email" name="email" id="email" />
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control type="password" name="password" id="password" />
              </Form.Group>
            </div>
            <Button as="input" type="submit" value="Sign Up" />
          </RForm>
        </Col>
      </Row>
    </>
  );
};

export default Signup;

export async function signupAction({ request }) {
  const data = await request.formData();
  const signupData = {
    email: data.get("email"),
    name: data.get("name"),
    password: data.get("password"),
  };

  const signUpRequest = await axios
    .post("http://127.0.0.1:8000/api/signup", signupData)
    .then((response) => {
      return redirect("/login");
    })
    .catch(({ response }) => {
      return response;
    });

  return signUpRequest;
}
