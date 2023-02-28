import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Bible from "../pages/Bible";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bible",
        element: <Bible />,
      },
    ],
  },
]);
