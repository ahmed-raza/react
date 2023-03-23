import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Messages from "../UI/Messages";
import { getAuthToken } from "../util/auth";

const UsersList = () => {
  const [users, setUsers] = useState();
  const [user, setUser] = useState();
  const [messages, setMessages] = useState();
  const token = getAuthToken();
  const navigate = useNavigate();

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
      })
      .catch(({ response }) => {
        if (response.status === 403) {
          return navigate("/access-denied");
        }
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
    if (id === user.id) {
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
    <>
      <h1>Users</h1>
      {messages && <Messages messages={messages} />}
      <div className="mb-2">
        <Link to="/new-user" className="btn btn-primary">
          Add User
        </Link>
      </div>
      <Table bordered striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Calories Limit</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody align="center">
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Link to={`/user/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.calories}</td>
                <td>{user.created_at}</td>
                <td>
                  <Link to={`/user/${user.id}/edit`}>Edit</Link> |{" "}
                  <a href="#" onClick={() => deleteUser(user.id)}>
                    Delete
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default UsersList;
