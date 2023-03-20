import axios from "axios";
import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("access_token");
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }
  return null;
}

export function checkAuthLoaderNegate() {
  const token = getAuthToken();
  if (token) {
    return redirect("/");
  }
  return null;
}

export async function getAuthUser() {
  const token = getAuthToken();
  const user = await axios
    .get("http://127.0.0.1:8000/api/user", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((response) => {
      console.log(response);
      return response;
    });
  return await user;
}
