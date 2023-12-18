import { createBrowserRouter } from "react-router-dom";
import { ROUTES as ROUTES } from "./common";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Root, { Home } from "./routes/Root";
import ErrorPage from "./error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SIGNIN,
        element: <Signin />,
      },
      {
        path: ROUTES.SIGNUP,
        element: <Signup />,
      },
    ],
  },
]);
