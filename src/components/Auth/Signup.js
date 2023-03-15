import { ErrorResponse, redirect } from "@remix-run/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, useActionData } from "react-router-dom";
import Card from "../UI/Card";
import Messages from "../UI/Messages";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [messages, setMessages] = useState();
  const data = useActionData();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (data !== undefined && (data.data.errors || data.data.message)) {
      setMessages(data.data);
    }
  }, [data]);

  return (
    <Card title="Signup">
      {messages ? <Messages messages={messages} /> : undefined}
      <Form method="post" autoComplete="off">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <input type="submit" value="Signup" />
        </div>
      </Form>
    </Card>
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
