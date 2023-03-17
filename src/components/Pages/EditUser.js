import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Form,
  useActionData,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Card from "../UI/Card";
import Messages from "../UI/Messages";
import { getAuthToken } from "../util/auth";

const EditUser = () => {
  const [user, setUser] = useState();
  const params = useParams();
  const user_id = params.id;
  const data = useActionData();
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
    setEmail(event.target.value);
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
    <Card title="Edit user">
      {messages && <Messages messages={messages} />}
      <form onSubmit={userUpdateSubmitHandler}>
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
          <label htmlFor="Email">Email</label>
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
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            value={role}
            onChange={roleChangeHandler}
          >
            <option value="admin1">Admin</option>
            <option value="manager">Manager</option>
            <option value="user">User</option>
          </select>
        </div>
        <div>
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            name="calories"
            id="calories"
            value={calories}
            onChange={caloriesChangeHandler}
          />
        </div>
        <div>
          <input type="submit" value="Update User" />
        </div>
      </form>
    </Card>
  );
};

export default EditUser;
