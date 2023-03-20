import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import { getAuthToken } from "../util/auth";

const MyAccount = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const token = getAuthToken();
    axios
      .get("http://127.0.0.1:8000/api/user", {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicaton/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((res) => {
        console.error(res);
      });
  }, []);

  return (
    <Card title="My Account">
      {user && (
        <>
          <Link to="/my-settings">Set Calories</Link>
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
        </>
      )}
    </Card>
  );
};

export default MyAccount;
