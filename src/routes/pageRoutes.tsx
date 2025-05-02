import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../utils/helpers";
import {
  Home,
} from "./pageRouteLink";

export const pageRoutes = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: Home,
  },
]);
