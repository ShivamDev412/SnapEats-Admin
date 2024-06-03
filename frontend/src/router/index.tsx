import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BROWSER_ROUTE } from "@/utils/Endpoints";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const LoginScreen = lazy(() => import("@/screens/Login"));
const HomeScreen = lazy(() => import("@/screens/Home"));

const Routers = () => {
  const { LOGIN, DASHBOARD } = BROWSER_ROUTE;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path={LOGIN} element={<LoginScreen />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={DASHBOARD} element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
