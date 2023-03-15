import { ErrorResponse } from "@remix-run/router";
import axios from "axios";
import React, { useState } from "react";
import Card from "../UI/Card";
import Messages from "../UI/Messages";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const signupSubmitHandler = (event) => {
    event.preventDefault();
    const data = { name, email, password };
    axios
      .post("http://127.0.0.1:8000/api/signup", data)
      .then((response) => {
        console.log(response);
      })
      .catch(({ response }) => {
        setErrors(response.data);
      });
  };

  return (
    <Card title="Signup">
      {errors ? <Messages messages={errors} /> : undefined}
      <form onSubmit={signupSubmitHandler} autoComplete="off">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={emailChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <input type="submit" value="Signup" />
        </div>
      </form>
    </Card>
  );
};

export default Signup;
