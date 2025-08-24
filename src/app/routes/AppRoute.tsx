import { createBrowserRouter } from "react-router";
import QuestionsPage from "../../pages/QuestionsPage/QuestionsPage";
import QuestionPage from "../../pages/QuestionPage/QuestionPage";
import AppLayout from "../layouts/AppLayout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <QuestionsPage />,
      },
      {
        path: "/questions/:id",
        element: <QuestionPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
