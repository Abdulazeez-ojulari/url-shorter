import { lazy } from "react";

const Home = lazy(() => import("../views/home/Home"));
const Statistic = lazy(() => import("../views/statistic/Statistic"));
const Decode = lazy(() => import("../views/decode/Decode"));
export {
  Home,
  Statistic,
  Decode
};
