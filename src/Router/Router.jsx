import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Assignments from "../Pages/Assignments/Assignments";
import Pending from "../Pages/Pending/Pending";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
import Update from "../Pages/Update/Update";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyAttempted from "../Pages/MyAttemped/MyAttempted";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/pending",
        element: (
          <PrivateRoute>
            <Pending />
          </PrivateRoute>
        ),
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/create",
        element: (
          <PrivateRoute>
            <CreateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://assignment-server-teal.vercel.app/assignments/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://assignment-server-teal.vercel.app/assignments/${params.id}`),
      },
      {
        path: "/my-assignment",
        element: (
          <PrivateRoute>
            <MyAttempted />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
