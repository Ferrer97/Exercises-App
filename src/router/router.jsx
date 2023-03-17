import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { HomePage, SingleExercisePage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <SingleExercisePage />,
      },
    ],
  },
]);
