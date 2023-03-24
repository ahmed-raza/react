import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Form as RForm } from "react-router-dom";
import classes from "../Styles/filterform.module.css";
import { getAuthToken } from "../util/auth";

const FilterForm = (props) => {
  const [name, setName] = useState();
  const token = getAuthToken();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const filterSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://127.0.0.1:8000/api/user/meals/filter",
        { name },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        props.onFilter(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  };
  return (
    <>
      <RForm className={classes.filterform} onSubmit={filterSubmitHandler}>
        <Form.Control
          type="text"
          name="name"
          placeholder="Name"
          size="20"
          onChange={nameChangeHandler}
        />
        <Form.Control
          type="date"
          name="start_date"
          placeholder="Start Date"
          size="20"
        />
        <Form.Control
          type="date"
          name="end_date"
          placeholder="End Date"
          size="20"
        />
        <Button as="input" type="submit" value={`Search`} />
      </RForm>
    </>
  );
};

export default FilterForm;
