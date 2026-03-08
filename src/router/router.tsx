import { createBrowserRouter } from "react-router";
import App from "../App";
import { LoginPage } from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/login",
    Component: LoginPage
  }
]);