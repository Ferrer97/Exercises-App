import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ExercisesProvider } from "./context/ExercisesContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExercisesProvider>
      <RouterProvider router={router} />
    </ExercisesProvider>
  </React.StrictMode>
);
