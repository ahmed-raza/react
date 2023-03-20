import axios from "axios";
import React, { useEffect, useState } from "react";
import { useActionData, useParams } from "react-router-dom";
import Card from "../UI/Card";
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
      .patch("http://127.0.0.1:8000/api/my-settings/" + user.id, userData, {
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
    <Card title="Settings">
      {messages && <Messages messages={messages} />}
      <form onSubmit={userUpdateSubmitHandler}>
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
          <input type="submit" value="Save Settings" />
        </div>
      </form>
    </Card>
  );
};

export default UserSettings;
