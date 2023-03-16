import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login, { action } from "./components/Auth/Login";
import { logoutAction } from "./components/Auth/Logout";
import Signup, { signupAction } from "./components/Auth/Signup";
import Error from "./components/Pages/Error";
import Home from "./components/Pages/Home";
import MyAccount from "./components/Pages/MyAccount";
import NewUser, { newUserAction } from "./components/Pages/NewUser";
import UserDetails from "./components/Pages/UserDetails";
import UsersList from "./components/Pages/UsersList";
import RootLayout from "./components/RootLayout";
import "./components/Styles/common.module.css";
import {
  checkAuthLoader,
  checkAuthLoaderNegate,
  tokenLoader,
} from "./components/util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    id: "root",
    loader: tokenLoader,
    children: [
      { path: "/", element: <Home /> },
      { path: "/my-account", element: <MyAccount />, loader: checkAuthLoader },
      {
        path: "/new-user",
        element: <NewUser />,
        action: newUserAction,
        loader: checkAuthLoader,
      },
      {
        path: "/list-users",
        element: <UsersList />,
        loader: checkAuthLoader,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
        loader: checkAuthLoader,
      },
      {
        path: "/login",
        element: <Login />,
        action: action,
        loader: checkAuthLoaderNegate,
      },
      {
        path: "/signup",
        element: <Signup />,
        action: signupAction,
        loader: checkAuthLoaderNegate,
      },
      { path: "/logout", action: logoutAction },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
