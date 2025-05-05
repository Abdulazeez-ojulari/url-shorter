import { lazy } from "react";

const Home = lazy(() => import("../views/home/Home"));
const Statistic = lazy(() => import("../views/statistic/Statistic"));
export {
  Home,
  Statistic
};
