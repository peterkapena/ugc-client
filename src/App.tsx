import { CssVarsProvider } from "@mui/joy/styles";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ApolloProvider } from "@apollo/client";
import apollo from "./apollo";

export default function App() {
  return (
    <CssVarsProvider>
      <ApolloProvider client={apollo}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </CssVarsProvider>
  );
}
