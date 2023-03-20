import axios from "axios";
import { getAuthToken } from "./auth";

export async function getUserMeals(user_id) {
  if (user_id === undefined) {
    return;
  }
  const token = getAuthToken();
  const meals = await axios
    .get("http://127.0.0.1:8000/api/user/" + user_id + "/meals", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((response) => {
      console.log(response);
      return response;
    });
  return await meals;
}

export async function getMeal(meal_id) {
  if (meal_id === undefined) {
    return;
  }
  const token = getAuthToken();
  const meal = await axios
    .get("http://127.0.0.1:8000/api/meal/" + meal_id, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch(({ response }) => {
      console.log(response);
      return response.data;
    });
  return await meal;
}
