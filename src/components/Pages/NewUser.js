import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import Card from "../UI/Card";
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
    <Card title="Add New User">
      {messages && <Messages messages={messages} />}
      <Form method="post">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select name="role" id="role">
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="user">User</option>
          </select>
        </div>
        <div>
          <label htmlFor="calories">Calories</label>
          <input type="number" name="calories" id="calories" />
        </div>
        <div>
          <input type="submit" value="Create User" />
        </div>
      </Form>
    </Card>
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
