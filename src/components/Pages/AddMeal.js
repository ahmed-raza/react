import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, redirect, useActionData, useLocation } from "react-router-dom";
import Card from "../UI/Card";
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
    <Card title="Add Meal">
      {messages && <Messages messages={messages} />}
      <Form method="post">
        <div>
          <label htmlFor="meal">Meal</label>
          <input type="text" name="meal" id="meal" />
        </div>
        <div>
          <label htmlFor="calories">Calories in this meal</label>
          <input type="number" name="calories" id="calories" />
        </div>
        <div>
          <label htmlFor="start_date">Start Date</label>
          <input type="date" name="start_date" id="start_date" />
        </div>
        <div>
          <label htmlFor="end_date">End Date</label>
          <input type="date" name="end_date" id="end_date" />
        </div>
        <div>
          <input type="submit" value="Add Meal" />
        </div>
      </Form>
    </Card>
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
