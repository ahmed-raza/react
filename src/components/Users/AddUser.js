import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");

  const errorHandler = () => {
    setError(null);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = usernameInputRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const user = {
      id: Math.random().toString(),
      username: enteredUsername,
      age: enteredAge,
    };
    props.onAddUser(user);
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={usernameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" min="1" max="99" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
