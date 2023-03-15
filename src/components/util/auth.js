import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("access_token");
  console.log(token);
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function getAuthUser() {
  const user = localStorage.getItem("user");
  return JSON.parse(user);
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (token) {
    return redirect("/");
  }
  return null;
}
