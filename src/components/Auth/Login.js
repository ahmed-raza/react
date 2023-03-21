import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form as RForm, useActionData } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import Messages from "../UI/Messages";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const data = useActionData();

  useEffect(() => {
    if (data !== undefined && (data.data.errors || data.data.message)) {
      setErrors(data.data);
    }
  }, [data]);

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <h1>Login</h1>
      {errors && <Messages messages={errors} />}
      <Row>
        <Col lg="4">
          <RForm method="post">
            <div className="mb-3">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleEmailInput}
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
                  onChange={handlePasswordInput}
                />
              </Form.Group>
            </div>
            <Button as="input" type="submit" value="Login" />
          </RForm>
        </Col>
      </Row>
    </>
  );
};

export default Login;

export async function action({ request }) {
  const data = await request.formData();
  const creds = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await axios
    .post("http://127.0.0.1:8000/api/login", creds)
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      return res;
    })
    .catch(({ response }) => {
      return response;
    });
  return response;
}
