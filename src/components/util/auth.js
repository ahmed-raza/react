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
