import { createBrowserRouter } from "react-router-dom";
import { ROUTES as ROUTES } from "./common";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Root from "./routes/Root";
import ErrorPage from "./error-page";
import Welcome from "./routes/Welcome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Welcome />,
      },
    ],
  },
  {
    path: ROUTES.SIGNIN,
    element: <Signin />,
  },
  {
    path: ROUTES.SIGNUP,
    element: <Signup />,
  },
]);
