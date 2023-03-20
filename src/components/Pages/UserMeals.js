import React, { useEffect, useState } from "react";
import { getUserMeals } from "../util/data";

const UserMeals = ({ user_id }) => {
  const [meals, setMeals] = useState();

  useEffect(() => {
    refreshMealsHandler();
  }, [user_id]);

  const refreshMealsHandler = () => {
    getUserMeals(user_id).then((response) => {
      if (response !== undefined) {
        setMeals(response);
      }
    });
  };

  return (
    <>
      <h2>My Meals</h2>
      <table width="100%" border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Meal</th>
            <th>Calories</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody align="center">
          {meals &&
            meals.map((meal) => {
              return (
                <tr key={meal.id}>
                  <td>{meal.id}</td>
                  <td>{meal.meal}</td>
                  <td>{meal.calories}</td>
                  <td>{meal.start_date}</td>
                  <td>{meal.end_date}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default UserMeals;
