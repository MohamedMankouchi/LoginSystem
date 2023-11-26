import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import { Register } from "../Register.jsx";
import { Profile } from "../Profile.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import {
  fetchData as loader,
  fetchDataGithub as loaderGithub,
} from "./ProtectedRoute.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: loader,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/profile",
    element: <ProtectedRoute />,
    loader: localStorage.getItem("type") == "google" ? loader : loaderGithub,
    children: [
      {
        path: "",
        element: <Profile />,
      },
    ],
  },
]);
