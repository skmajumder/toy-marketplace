import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllToysLayout from "../layouts/AllToysLayout/AllToysLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "all-toys",
    element: <AllToysLayout />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
