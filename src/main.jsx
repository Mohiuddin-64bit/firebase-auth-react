import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./component/Login";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Registration from "./component/Registration.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import PrivetRouter from "./component/PrivetRouter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "about",
        element: <PrivetRouter><About></About></PrivetRouter>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
