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
import AllToys from "../pages/AllToys/AllToys";
import SingleToy from "../pages/AllToys/SingleToy";
import MyToysLayout from "../layouts/MyToysLayout/MyToysLayout";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/MyToys/UpdateToy/UpdateToy";

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
    children: [
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: ":id",
        element: (
          <PrivateRouters>
            <SingleToy />
          </PrivateRouters>
        ),
      },
    ],
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
        element: (
          <PrivateRouters>
            <AddToy />
          </PrivateRouters>
        ),
      },
    ],
  },
  {
    path: "my-toys",
    element: (
      <PrivateRouters>
        <MyToysLayout />
      </PrivateRouters>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/my-toys",
        element: (
          <PrivateRouters>
            <MyToys />
          </PrivateRouters>
        ),
      },
      {
        path: ":id",
        element: (
          <PrivateRouters>
            <UpdateToy />
          </PrivateRouters>
        ),
      },
    ],
  },
  {
    path: "blog",
    element: <BlogLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/blog",
        element: <BlogPage />,
      },
    ],
  },
]);

export default router;
