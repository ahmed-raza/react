import { redirect } from "react-router-dom";
import axios from "axios";

export function getAuthToken() {
  const token = localStorage.getItem("access_token");
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function getAuthUser() {
  const token = getAuthToken();
  const user = axios
    .get("http://127.0.0.1:8000/api/user", {
      headers: {
        "Content-Type": "application/json",
        Accept: "applicaton/json",
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((res) => {
      return res;
    });
  console.log(user);
  if (user.data === 200) {
    return user.data;
  }
  return user;
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
