import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import { getAuthToken } from "../util/auth";

const UsersList = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    getUsersHandler();
  }, []);

  async function getUsersHandler() {
    const token = getAuthToken();
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

  return (
    <Card title="Users">
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
                <td>Edit | Delete</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Card>
  );
};

export default UsersList;
