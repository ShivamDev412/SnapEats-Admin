import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BROWSER_ROUTE } from "@/utils/Endpoints";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { SocketProvider } from "@/providers/SocketContext";

const LoginScreen = lazy(() => import("@/screens/Login"));
const HomeScreen = lazy(() => import("@/screens/Home"));
const StoreRequestsScreen = lazy(() => import("@/screens/StoreRequests"));
const UsersScreen = lazy(() => import("@/screens/Users"));
const StoresScreen = lazy(() => import("@/screens/Stores"));
const Routers = () => {
  const { LOGIN, DASHBOARD, STORE_REQUESTS, USERS, STORES } = BROWSER_ROUTE;
  return (
    <SocketProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path={LOGIN} element={<LoginScreen />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={DASHBOARD} element={<HomeScreen />} />
            <Route path={STORE_REQUESTS} element={<StoreRequestsScreen />} />
            <Route path={USERS} element={<UsersScreen />} />
            <Route path={STORES} element={<StoresScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SocketProvider>
  );
};

export default Routers;
