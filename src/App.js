import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const dummy_users = [
  { id: Math.random().toString(), username: "Ahmed", age: 29 },
];

function App() {
  const [usersList, setUsersList] = useState(dummy_users);

  const addUserHandler = (user) => {
    setUsersList((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
