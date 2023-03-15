import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, useActionData } from "react-router-dom";
import Card from "../UI/Card";
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
    <Card title="Login">
      {errors && <Messages messages={errors} />}
      <Form method="post">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleEmailInput}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlePasswordInput}
          />
        </div>
        <div>
          <input type="submit" id="submit" value="Login" />
        </div>
      </Form>
    </Card>
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
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return res;
    })
    .catch(({ response }) => {
      return response;
    });
  return response;
}
