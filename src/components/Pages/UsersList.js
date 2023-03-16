import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import Messages from "../UI/Messages";
import { getAuthToken } from "../util/auth";

const UsersList = () => {
  const [users, setUsers] = useState();
  const [user, setUser] = useState();
  const [messages, setMessages] = useState();
  const token = getAuthToken();

  useEffect(() => {
    getAuthUser();
    getUsersHandler();
  }, []);

  async function getUsersHandler() {
    await axios
      .get("http://127.0.0.1:8000/api/users", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setUsers(response.data);
      });
  }

  async function getAuthUser() {
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
      });
  }

  const deleteUser = (id) => {
    if (id == user.id) {
      console.log(user);
      return;
    }
    axios
      .get("http://127.0.0.1:8000/api/delete-user/" + id, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setMessages(response.data);
        getUsersHandler();
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <Card title="Users">
      {messages && <Messages messages={messages} />}
      <Link to="/new-user">Add User</Link>
      <hr />
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Link to={`/user/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.created_at}</td>
                <td>
                  <Link to={`/user/${user.id}/edit`}>Edit</Link> |{" "}
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Card>
  );
};

export default UsersList;
