import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Messages from "../UI/Messages";
import { getAuthToken } from "../util/auth";
import UserMeals from "./UserMeals";

const UserDetails = () => {
  const [user, setUser] = useState();
  const [messages, setMessages] = useState();
  const params = useParams();
  const user_id = params.id;

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
      })
      .catch(({ response }) => {
        setMessages(response.data);
      });
  }

  return (
    <>
      {messages && <Messages messages={messages} />}
      {user && (
        <>
          <div>
            <strong>Name: </strong> {user.name}
          </div>
          <div>
            <strong>Email: </strong> {user.email}
          </div>
          <div>
            <strong>Role: </strong> {user.role}
          </div>
          <div>
            <strong>Daily Calories Limit: </strong> {user.calories}
          </div>
          <div>
            <strong>Member since: </strong> {user.created_at}
          </div>
          <UserMeals user_id={user.id} add_more />
        </>
      )}
    </>
  );
};

export default UserDetails;
