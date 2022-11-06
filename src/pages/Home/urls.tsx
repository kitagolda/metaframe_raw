import { Route } from "react-router-dom";

import { RouteUrls } from "routes";

import HomePage from "./";

export const HomeRoute = (
  <Route key="home" path={RouteUrls.Home} element={<HomePage />} />
);
