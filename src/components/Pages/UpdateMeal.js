import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Messages from "../UI/Messages";
import { Form as RForm, useActionData, useParams } from "react-router-dom";
import { getMeal } from "../util/data";
import axios from "axios";
import { getAuthToken } from "../util/auth";

const UpdateMeal = () => {
  const [messages, setMessages] = useState();
  const [meal, setMeal] = useState();
  const [calories, setCalories] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const params = useParams();
  const meal_id = params.id;
  const data = useActionData();
  console.log(meal_id);
  useEffect(() => {
    getMeal(meal_id).then((response) => {
      setMeal(response.meal);
      setCalories(response.calories);
      setStartDate(response.start_date);
      setEndDate(response.end_date);
    });

    if (data !== undefined && (data.errors || data.message)) {
      setMessages(data);
    }
  }, [meal_id, data]);

  const mealChangeHandler = (event) => {
    setMeal(event.target.value);
  };

  const caloriesChangeHandler = (event) => {
    setCalories(event.target.value);
  };

  const startDateChangeHandler = (event) => {
    setStartDate(event.target.value);
  };

  const endDateChangeHandler = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <>
      <h1>Edit Meal</h1>
      {messages && <Messages messages={messages} />}
      <Row>
        <Col lg="4">
          <RForm method="put">
            <Form.Control type="hidden" name="id" value={meal_id} />
            <div className="mb-3">
              <Form.Group>
                <Form.Label>Meal</Form.Label>
                <Form.Control
                  type="text"
                  name="meal"
                  id="meal"
                  value={meal}
                  onChange={mealChangeHandler}
                />
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group>
                <Form.Label>Calories</Form.Label>
                <Form.Control
                  type="number"
                  name="calories"
                  id="calories"
                  value={calories}
                  onChange={caloriesChangeHandler}
                />
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group>
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="start_date"
                  id="start_date"
                  value={startDate}
                  onChange={startDateChangeHandler}
                />
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group>
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="end_date"
                  id="end_date"
                  value={endDate}
                  onChange={endDateChangeHandler}
                />
              </Form.Group>
            </div>
            <Button as="input" type="submit" value="Update Meal" />
          </RForm>
        </Col>
      </Row>
    </>
  );
};

export default UpdateMeal;

export async function mealUpdateAction({ request }) {
  const data = await request.formData();
  const token = getAuthToken();
  const meal = {
    meal: data.get("meal"),
    calories: data.get("calories"),
    start_date: data.get("start_date"),
    end_date: data.get("end_date"),
    id: data.get("id"),
  };

  const updateMeal = await axios
    .put("http://127.0.0.1:8000/api/meal/" + meal.id + "/update", meal, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(({ response }) => {
      console.log(response.data);
      return response.data;
    });

  return await updateMeal;
}
