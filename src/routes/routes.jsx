import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ToyDetails from "../pages/ToyDetails";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Toy from "../pages/Toy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/toy",
        element: <Toy />,
      },
      {
        path: "/category/:category",
        element: <Toy />,
      },
      {
        path: "/toy/:toyId",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
