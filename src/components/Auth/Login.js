import React, { useState } from "react";
import axios from "axios";
import { Link, redirect, useNavigate, useSearchParams } from "react-router-dom";
import Card from "../UI/Card";
import Messages from "../UI/Messages";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const navigate = useNavigate();

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    const creds = { email, password };
    axios
      .post("http://127.0.0.1:8000/api/login", creds)
      .then((res) => {
        setErrors("");
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      })
      .catch(({ response }) => {
        setErrors(response.data);
      });
    navigate("/");
  };

  return (
    <Card title="Login">
      {errors ? <Messages messages={errors} /> : undefined}
      <form onSubmit={loginSubmitHandler}>
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
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>Signup</Link>
        </div>
      </form>
    </Card>
  );
};

export default Login;
