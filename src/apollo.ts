import { ApolloClient, InMemoryCache } from "@apollo/client";
import { STR_TOKEN } from "./common";

const apollo = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_URL,
  cache: new InMemoryCache(),
  headers: {
    authorization: sessionStorage.getItem(STR_TOKEN) || "",
  },
});

export default apollo;