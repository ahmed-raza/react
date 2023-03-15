import axios from "axios";
import { redirect } from "react-router-dom";

export async function logoutAction() {
  await axios
    .get("http://127.0.0.1:8000/api/logout", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    })
    .then(() => {
      localStorage.removeItem("access_token");
      return redirect("/");
    });
  return redirect("/");
}
