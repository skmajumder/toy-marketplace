import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllToysLayout from "../layouts/AllToysLayout/AllToysLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToyLayout from "../layouts/AddToyLayout/AddToyLayout";
import PrivateRouters from "./PrivateRouters";
import AddToy from "../pages/AddToy/AddToy";

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
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "all-toys",
    element: <AllToysLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "add-toy",
    element: (
      <PrivateRouters>
        <AddToyLayout />
      </PrivateRouters>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/add-toy",
        element: <AddToy />,
      },
    ],
  },
]);

export default router;
