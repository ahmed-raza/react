import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import { Button, Form as bForm } from "react-bootstrap";
import Messages from "../UI/Messages";
import { getAuthToken } from "../util/auth";

const AddMeal = () => {
  const [messages, setMessages] = useState();
  const data = useActionData();

  useEffect(() => {
    if (data !== undefined && (data.errors || data.message)) {
      setMessages(data);
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <h1>Add Meal</h1>
      {messages && <Messages messages={messages} />}
      <Form method="post">
        <div className="mb-3">
          <bForm.Group>
            <bForm.Label>Meal</bForm.Label>
            <bForm.Control type="text" name="meal" id="meal" />
          </bForm.Group>
        </div>
        <div className="mb-3">
          <bForm.Group>
            <bForm.Label>Calories in this meal</bForm.Label>
            <bForm.Control type="number" name="calories" id="calories" />
          </bForm.Group>
        </div>
        <div className="mb-3">
          <bForm.Group>
            <bForm.Label>Start Date</bForm.Label>
            <bForm.Control type="date" name="start_date" id="start_date" />
          </bForm.Group>
        </div>
        <div className="mb-3">
          <bForm.Group>
            <bForm.Label>End Date</bForm.Label>
            <bForm.Control type="date" name="end_date" id="end_date" />
          </bForm.Group>
        </div>
        <Button as="input" type="submit" value="Add Meal"></Button>
      </Form>
    </>
  );
};

export default AddMeal;

export async function addMealAction({ request }) {
  const params = new URLSearchParams(request.url);
  const data = await request.formData();
  const token = getAuthToken();
  const meal = {
    meal: data.get("meal"),
    calories: data.get("calories"),
    start_date: data.get("start_date"),
    end_date: data.get("end_date"),
  };

  const addMeal = await axios
    .post("http://127.0.0.1:8000/api/user/add-meal", meal, {
      headers: {
        "Content-Type": "application/json",
        Accept: "applicaton/json",
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return redirect("/");
    })
    .catch(({ response }) => {
      return response.data;
    });

  return addMeal;
}
