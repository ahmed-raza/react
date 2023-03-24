import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import FilterForm from "../UI/FilterForm";
import { getAuthUser } from "../util/auth";
import { getUserMeals } from "../util/data";

const UserMeals = ({ user_id, title, add_more }) => {
  const [meals, setMeals] = useState();
  const [user, setUser] = useState();
  const location = useLocation();

  useEffect(() => {
    refreshMealsHandler();
    getAuthUser().then((response) => {
      setUser(response.data);
    });
  }, [user_id]);

  const refreshMealsHandler = () => {
    getUserMeals(user_id).then((response) => {
      if (response !== undefined) {
        setMeals(response);
      }
    });
  };

  const handleFilter = (data) => {
    setMeals(data);
  };

  const resetFilter = () => {
    refreshMealsHandler();
  };

  return (
    <>
      {title && <h1>Add Meal</h1>}
      <div className="mt-2 mb-2">
        <Row>
          <Col lg="2">
            <Link
              to={`/add-meal?redirect=${location.pathname}`}
              className="btn btn-primary"
            >
              Add Meal
            </Link>
          </Col>
          <Col lg="10">
            <FilterForm onFilter={handleFilter} onReset={resetFilter} />
          </Col>
        </Row>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Meal</th>
            <th>Calories</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody align="center">
          {meals &&
            meals.map((meal) => {
              return (
                <tr key={meal.id}>
                  <td>{meal.id}</td>
                  <td>{meal.meal}</td>
                  <td
                    className={
                      user && user.calories < meal.calories
                        ? "bg-danger"
                        : "bg-success"
                    }
                  >
                    {meal.calories}
                  </td>
                  <td>{meal.start_date}</td>
                  <td>{meal.end_date}</td>
                  <td>
                    <Link to={`/meal/${meal.id}/edit`}>Edit</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default UserMeals;
