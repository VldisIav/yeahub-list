import { createBrowserRouter } from "react-router";
import QuestionsPage from "../../pages/QuestionsPage/QuestionsPage";
import QuestionDetail from "../../pages/QuestionPage/QuestionPage";
import AppLayout from "../layouts/AppLayout";

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
        path: "/",
        element: <QuestionDetail />,
      },
    ],
  },
]);
