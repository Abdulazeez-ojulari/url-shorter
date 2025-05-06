import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../utils/helpers";
import {
  Decode,
  Home,
  Statistic,
} from "./pageRouteLink";

export const pageRoutes = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: Home,
  },
  {
    path: ROUTES.STATS,
    Component: Statistic,
  },
  {
    path: ROUTES.DECODEURL,
    Component: Decode,
  },
]);
