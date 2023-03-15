import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Auth/Login";
import { logoutAction } from "./components/Auth/Logout";
import Signup from "./components/Auth/Signup";
import Error from "./components/Pages/Error";
import Home from "./components/Pages/Home";
import RootLayout from "./components/RootLayout";
import "./components/Styles/common.module.css";
import { checkAuthLoader, tokenLoader } from "./components/util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    id: "root",
    loader: tokenLoader,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login />, loader: checkAuthLoader },
      { path: "/signup", element: <Signup />, loader: checkAuthLoader },
      { path: "/logout", action: logoutAction },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
